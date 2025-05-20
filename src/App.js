import { RouterProvider } from 'react-router-dom';
import './App.css';
import "flatpickr/dist/flatpickr.min.css";
import GlobalStyle from './styles/global-style';
import router from './routes/router';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <>
    <CookiesProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </CookiesProvider>
    </>
  );
}

export default App;
