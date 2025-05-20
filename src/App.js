import { RouterProvider } from 'react-router-dom';
import './App.css';
import "flatpickr/dist/flatpickr.min.css";
import GlobalStyle from './styles/global-style';
import router from './routes/router';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
