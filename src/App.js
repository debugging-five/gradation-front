import { RouterProvider } from 'react-router-dom';
import './App.css';
import GlobalStyle from './styles/global-style';
import router from './routes/router';
import DisplayListContainer from './pages/display/displayList/DisplayListContainer';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* <DisplayListContainer /> */}
    </>
  );
}

export default App;
