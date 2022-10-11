import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import StatisticsPage from "../Components/StatisticsPage";
import Blog from "../Components/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/statisticsPage", element: <StatisticsPage /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
export default router;
