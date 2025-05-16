import { RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalStyle from './styles/global-style';
import router from './routes/router';
import MainContainer from './pages/main/MainContainer';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import TestContainer from './pages/test/TestContainer';
import JoinCompleteModal from './pages/account/join/joinModal/JoinCompleteModal';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* <JoinCompleteModal /> */}
    </>
  );
}

export default App;
