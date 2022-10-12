import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import ErrorPage from "../Components/ErrorPage";
import Statistics from "../Components/Statistics";
import Blog from "../Components/Blog";
import QuizDetails from "../Components/QuizDetails";
import Default from "../Components/Default";
import Topics from "../Components/Topics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      { path: "/", element: <Default /> },
      { path: "/home", element: <Default /> },
      {
        path: "/quiz/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <QuizDetails />,
      },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
      { path: "/quiz", element: <Topics /> },
    ],
  },
]);
export default router;
