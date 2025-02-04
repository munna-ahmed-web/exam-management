import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import QuestionDetails from "../pages/QuestionDetails";
import AllQuestionPaperForExamineer from "../pages/AllQuestionPaperForExamineer";

<<<<<<< HEAD
=======


>>>>>>> c65e4e73394edae2ff26cdcb1c7bf09450fa5510
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
        element: <AllQuestionPaperForExamineer />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
