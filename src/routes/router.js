import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import MainContainer from "../pages/main/MainContainer";
import TestContainer from "../pages/test/TestContainer";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        index : true,
        element : <MainContainer />
      },
      {
        path : "/test",
        element : <TestContainer />
      }
    ]
  }

])

export default router;