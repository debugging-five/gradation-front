import React, { useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../modules/user';

const Layout = () => {

  const { currentUser, isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const jwtToken = searchParams.get("jwtToken");
  const localJwtToken = localStorage.getItem("jwtToken");

  const navigate = useNavigate();

  useEffect(() => {
    if(jwtToken) {
      console.log(jwtToken)
      localStorage.setItem("jwtToken", jwtToken);
      navigate("/", { replace: true });
    }

    if(localJwtToken){
      console.log("localJwtToken", localJwtToken)
      const getUserDatas = async () => {
        const response = await fetch("http://localhost:10000/users/api/profile", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${localJwtToken}`
          }
        })

        if (!response.ok) {
          dispatch(setUser({
            id : 0,
            userIdentification : "",
            userPassword : "",
            userName : "",
            userNickName : "",
            userPhone : "",
            userEmail : "",
            userProvider : ""
          }));
          dispatch(setUserStatus(false));
          localStorage.clear();
          return;
        }
        
        const datas = await response.json();
        console.log("datas", datas)
        console.log(datas.currentUser)
        dispatch(setUser(datas.currentUser));
        dispatch(setUserStatus(true));
      };
      getUserDatas()
    }
  }, [localJwtToken]); 

  console.log("currentUser", currentUser)

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setUser({
      id : 0,
      userIdentification : "",
      userPassword : "",
      userName : "",
      userNickName : "",
      userPhone : "",
      userEmail : "",
      userProvider : ""
    }));
    dispatch(setUserStatus(false));
    window.location.href = "http://localhost:10000/logout";
  };

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;