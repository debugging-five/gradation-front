import React, { useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../modules/user';
import S from './style';

const Layout = () => {

  const { currentUser, isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const jwtToken = searchParams.get("jwtToken");
  // const localJwtToken = localStorage.getItem("jwtToken") 
  const token = localStorage.getItem("jwtToken") || sessionStorage.getItem("jwtToken")

  const navigate = useNavigate();

  useEffect(() => {
    if(jwtToken) {
      // console.log("jwtToken", jwtToken)
      localStorage.setItem("jwtToken", jwtToken);
      navigate("/", { replace: true });
    }

    if(token){
      // console.log("localJwtToken", localJwtToken)
      const getUserDatas = async () => {
        const response = await fetch("http://localhost:10000/users/api/profile", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`
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
          // localStorage.clear();
          // sessionStorage.clear();
          localStorage.removeItem("jwtToken")
          sessionStorage.removeItem("jwtToken")
        }
        
        const datas = await response.json();
        console.log("datas", datas)
        console.log(datas.currentUser)
        dispatch(setUser(datas.currentUser));
        dispatch(setUserStatus(true));
      };
      getUserDatas()
    }
  }, [jwtToken]); 

  const handleLogout = () => {
    // localStorage.clear();
    localStorage.removeItem("jwtToken")
    sessionStorage.removeItem("jwtToken")
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
    <S.Container>
      <Header onLogout={handleLogout} />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </S.Container>
  );
};

export default Layout;