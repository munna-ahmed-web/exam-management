import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import QuestionDetails from "../pages/QuestionDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        path: "/login",
        element: <SignIn />,
      },
      {
        index: true,
        path: "/signup",
        element: <SignUp />,
      },
      {
        index: true,
        path: "/question/:id",
        element: <QuestionDetails />,
      },
      {
        index: true,
        path: "/allQuestionPaperForExamineer",
        element: <QuestionDetails />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
