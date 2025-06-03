import React, { useState, useEffect } from "react";
import S from "./UserManagementStyle";

const STATUS_LIST = [
  { value: 0, label: "일반회원" },
  { value: 1, label: "댓글정지" },
  { value: 2, label: "영구정지" }
];
const USERS_PER_PAGE = 10;

const UserManagementPendingList = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [checkedIds, setCheckedIds] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [changedStatus, setChangedStatus] = useState({});

  const BAN_STATUS_LABEL = {
    0: "일반회원",
    1: "댓글정지",
    2: "영구정지",
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) return;
    fetch("http://localhost:10000/users/api/profile", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (data.currentUser?.userAdminOk === true) setIsAdmin(true);
      });
  }, []);

  useEffect(() => {
    if (!isAdmin) return;
    fetch("http://localhost:10000/admin/api/user/list", {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setUsers(data);
        else setUsers([]);
      });
  }, [isAdmin]);

  const handleAllCheck = (e) => {
    if (e.target.checked) {
      setCheckedIds(users.map(user => user.id));
    } else {
      setCheckedIds([]);
    }
  };

    const handleCheck = (id) => {
    setCheckedIds(prev =>
      prev.includes(id) ? prev.filter(_id => _id !== id) : [...prev, id]
    );
  };

  const handleBulkStatusChange = (status) => {
    const numericStatus = Number(status);
    setChangedStatus(prev => {
      const updated = { ...prev };
      checkedIds.forEach(id => {
        updated[id] = numericStatus;
      });
      return updated;
    });
    setUsers(prev =>
      prev.map(user =>
        checkedIds.includes(user.id)
          ? { ...user, userBanOk: numericStatus }
          : user
      )
    );
  };

  const handleStatusChange = (id, status) => {
    const numeric = Number(status);
    setChangedStatus(prev => ({ ...prev, [id]: numeric }));
    setUsers(prev => prev.map(u => u.id === id ? { ...u, userBanOk: numeric } : u));
  };

  const handleSave = async () => {
    const changedList = Object.entries(changedStatus).map(([id, userBanOk]) => ({
      userId: id,
      userBanOk: Number(userBanOk),
    }));

    if (changedList.length === 0) {
      alert("변경된 상태가 없습니다!");
      return;
    }
    try {
      await fetch("http://localhost:10000/admin/api/user/ban", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify(changedList),
      });
      alert("저장되었습니다!");
      setChangedStatus({});
    } catch (e) {
      alert("저장 중 오류 발생");
    }
  };

  const filteredUsers = users.filter(user =>
    user.userName.includes(searchText) ||
    user.userIdentification.includes(searchText) ||
    user.userPhone?.includes(searchText)
  );

  const totalPage = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const PAGE_GROUP_SIZE = 5;
  const pageGroup = Math.ceil(currentPage / PAGE_GROUP_SIZE);
  const startPage = (pageGroup - 1) * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPage);

  const pagedUsers = filteredUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

    return (
    <S.Container>
      <S.SearchBar>
        <S.SearchInput
          placeholder="이름/아이디/연락처"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <S.SearchButton>검색</S.SearchButton>
      </S.SearchBar>

      <S.Table>
        <S.Head>
          <S.Row>
            <S.HeaderCell>
              <S.Checkbox
                type="checkbox"
                onChange={handleAllCheck}
                checked={checkedIds.length === users.length && users.length > 0}
              />
            </S.HeaderCell>
            <S.HeaderCell>이름</S.HeaderCell>
            <S.HeaderCell>아이디</S.HeaderCell>
            <S.HeaderCell>전화번호</S.HeaderCell>
            <S.HeaderCell>
              <S.StatusSelect
                value={selectedStatus}
                onChange={e => {
                  setSelectedStatus(e.target.value);
                  handleBulkStatusChange(e.target.value);
                }}
              >
                <option value="">상태변경</option>
                {STATUS_LIST.map(status => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </S.StatusSelect>
            </S.HeaderCell>
            <S.HeaderCell>현재상태</S.HeaderCell>
            <S.HeaderCell></S.HeaderCell>
          </S.Row>
        </S.Head>
        <S.Body>
          {pagedUsers.map(user => (
            <S.Row key={user.id}>
              <S.Cell>
                <S.Checkbox
                  type="checkbox"
                  checked={checkedIds.includes(user.id)}
                  onChange={() => handleCheck(user.id)}
                />
              </S.Cell>
              <S.Cell>{user.userName}</S.Cell>
              <S.Cell>{user.userIdentification}</S.Cell>
              <S.Cell>{user.userPhone}</S.Cell>
              <S.Cell>
                <S.StatusSelect
                  value={user.userBanOk}
                  onChange={e => handleStatusChange(user.id, e.target.value)}
                >
                  {STATUS_LIST.map(status => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </S.StatusSelect>
              </S.Cell>
              <S.Cell>
                <S.StatusText status={BAN_STATUS_LABEL[user.userBanOk]}>
                  {BAN_STATUS_LABEL[user.userBanOk] ?? "알 수 없음"}
                </S.StatusText>
              </S.Cell>
              <S.Cell></S.Cell>
            </S.Row>
          ))}
        </S.Body>
      </S.Table>
      <S.Pagination>
        <S.PaginationNumber
          as="span"
          onClick={() => setCurrentPage(startPage - 1)}
          style={{ visibility: startPage === 1 ? "hidden" : "visible" }}
        >
          〈
        </S.PaginationNumber>

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <S.PaginationNumber
            key={startPage + i}
            active={currentPage === startPage + i}
            onClick={() => setCurrentPage(startPage + i)}
          >
            {startPage + i}
          </S.PaginationNumber>
        ))}

        <S.PaginationNumber
          as="span"
          onClick={() => setCurrentPage(endPage + 1)}
          style={{ visibility: endPage === totalPage ? "hidden" : "visible" }}
        >
          〉
        </S.PaginationNumber>
      </S.Pagination>
      <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
    </S.Container>
  );
};

export default UserManagementPendingList;