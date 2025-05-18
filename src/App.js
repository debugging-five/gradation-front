import { RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalStyle from './styles/global-style';
import router from './routes/router';
import NotFoundModal from './pages/account/findId/findIdModal/notFoundModal/NotFoundModal';
import SocialModal from './pages/account/findId/findIdModal/socialModal/SocialModal';
import FindIdSuccessModal from './pages/account/findId/findIdModal/successModal/FindIdSuccessModal';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* <NotFoundModal /> */}
      {/* <SocialModal /> */}
      {/* <FindIdSuccessModal /> */}
    
    </>
  );
}

export default App;
