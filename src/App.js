import { RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalStyle from './styles/global-style';
import router from './routes/router';
import MainContainer from './pages/main/MainContainer';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import TestContainer from './pages/test/TestContainer';
import JoinContainer from './pages/account/join/JoinContainer';
import Join from './pages/account/join/Join';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <RouterProvider router={router} /> */}
      <Join />
    </>
  );
}

export default App;
