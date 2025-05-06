import React, { useState } from 'react';

const UserInfoContainer = () => {

  const [edit, setEdit] = useState(false);
  const handleEdit = () => setEdit(!edit)

  return (
    <div>
      <h1>{edit ? "회원정보 수정" : "회원정보"}</h1>
      <div>
        <span>닉네임</span>
        {edit ? (
          <input value={"홍길동무"}/>
        ) : (
          <p>홍길동무</p>
        )}
      </div>

      <div>
        {edit ? (
          <button onClick={handleEdit}>저장</button>
        ) : (
          <button onClick={handleEdit}>수정</button>
        )}
      </div>
    </div>
  );
};

export default UserInfoContainer;