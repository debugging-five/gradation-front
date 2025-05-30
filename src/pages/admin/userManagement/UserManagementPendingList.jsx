import React, { useState, useEffect } from "react";
import S from "./UserManagementStyle";

const STATUS_LIST = ["선택", "일반회원", "댓글정지", "영구정지"];

const UserManagementPendingList = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [checkedIds, setCheckedIds] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // 관리자 인증 (FAQ 패턴 복붙)
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

  // 데이터 패칭
  useEffect(() => {
    if (!isAdmin) return;
    fetch("http://localhost:10000/admin/api/user/list", {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` }
    })
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [isAdmin]);

  // 체크박스 로직
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

  // 검색
  const filteredUsers = users.filter(user =>
    user.userName.includes(searchText) ||
    user.userIdentification.includes(searchText) ||
    user.userPhone?.includes(searchText)
  );

  // 개별 상태 변경
  const handleStatusChange = (id, status) => {
    // PATCH 요청 등 구현
    // POST /admin/api/user/ban
    // body: { userId: id, userBanStatus: status }
  };

  // 일괄 상태 변경
  const handleBulkStatusChange = (status) => {
    // 선택된 checkedIds 에 대해 일괄 PATCH
    // POST /admin/api/user/ban (배열로 보내거나, 여러번 요청)
  };

  return (
    <S.Container>
      <S.SearchBarWrapper>
        <S.SearchInput
          placeholder="이름/아이디/연락처"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <S.SearchButton>검색</S.SearchButton>
      </S.SearchBarWrapper>
      <S.Table>
        {/* Table Header */}
        <S.TableHead>
          <S.TableRow>
            <S.TableTh $flex={0.7}>
              <S.Checkbox
                type="checkbox"
                onChange={handleAllCheck}
                checked={checkedIds.length === users.length && users.length > 0}
              />
            </S.TableTh>
            <S.TableTh $flex={1.3}>이름</S.TableTh>
            <S.TableTh $flex={2}>아이디</S.TableTh>
            <S.TableTh $flex={1.7}>전화번호</S.TableTh>
            <S.TableTh $flex={2.1}>
              회원상태관리
              <S.StatusDropdown
                value={selectedStatus}
                onChange={e => {
                  setSelectedStatus(e.target.value);
                  handleBulkStatusChange(e.target.value);
                }}
              >
                {STATUS_LIST.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </S.StatusDropdown>
            </S.TableTh>
            <S.TableTh $flex={1.2}>회원상태</S.TableTh>
            <S.TableTh $flex={0.8}></S.TableTh>
          </S.TableRow>
        </S.TableHead>
        {/* Table Body */}
        <S.TableBody>
          {filteredUsers.map(user => (
            <S.TableRow key={user.id}>
              <S.TableTd $flex={0.7}>
                <S.Checkbox
                  type="checkbox"
                  checked={checkedIds.includes(user.id)}
                  onChange={() => handleCheck(user.id)}
                />
              </S.TableTd>
              <S.TableTd $flex={1.3}>{user.userName}</S.TableTd>
              <S.TableTd $flex={2}>{user.userIdentification}</S.TableTd>
              <S.TableTd $flex={1.7}>{user.userPhone}</S.TableTd>
              <S.TableTd $flex={2.1}>
                <S.StatusDropdown
                  value={user.userBanStatus || "선택"}
                  onChange={e => handleStatusChange(user.id, e.target.value)}
                >
                  {STATUS_LIST.map(status => (
                    <option
                      key={status}
                      value={status}
                      style={
                        status === "댓글정지" ? { color: "#E49804" } :
                        status === "영구정지" ? { color: "#EE3333" } : {}
                      }
                    >
                      {status}
                    </option>
                  ))}
                </S.StatusDropdown>
              </S.TableTd>
              <S.TableTd $flex={1.2}>
                <S.StatusLabel status={user.userBanStatus}>
                  {user.userBanStatus}
                </S.StatusLabel>
              </S.TableTd>
              <S.TableTd $flex={0.8}>
                <S.DeleteButton>
                  <i className="fa fa-trash" />
                </S.DeleteButton>
              </S.TableTd>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.Container>
  );
};

export default UserManagementPendingList;
