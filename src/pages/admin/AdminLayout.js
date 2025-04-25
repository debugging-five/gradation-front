import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  // 어드민인지 검사
  // const { id } = useSelector((state) => state.user)
  const id = 1;
  const isAdmin = id === 1;
  const navigate = useNavigate()

  useEffect(() => {
    if(!isAdmin){
      alert("잘못된 접근입니다")
      return navigate("/", { replace : true })
    }
  }, [id])

  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminLayout;