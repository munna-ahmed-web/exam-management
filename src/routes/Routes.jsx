import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import QuestionDetails from "../pages/QuestionDetails";
import AllQuestionPaperForExamineer from "../pages/AllQuestionPaperForExamineer";
import SingleQuestionPaperForExamineer from "../pages/SingleQuestionPaperForExamineer";
import AllQuestionPapersOfExaminee from "../pages/AllQuestionPapersOfExaminee";
import SearchQuestionPaperbyExamineer from "../pages/SearchQuestionPaperbyExamineer";

import UserManagement from "../pages/Users";
import CreateCandidate from "../pages/CreateCandidate";
import CreateQuestionPaper from "../pages/CreateSingleQuestionPaper ";
import UserDetails from "../pages/UserDetails";
import UpdateUser from "../pages/UpdateUser";

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
        path: "/users",
        element: <UserManagement />,
      },
      {
        index: true,
        path: "/user/:id",
        element: <UserDetails />,
      },
      {
        index: true,
        path: "/user/:id/update",
        element: <UpdateUser />,
      },
      {
        index: true,
        path: "/question/:id",
        element: <QuestionDetails />,
      },
      {
        index: true,
        path: "/createCandidate",
        element: <CreateCandidate />,
      },

      {
        index: true,
        path: "/allQuestionPaperForExamineer",
        element: <AllQuestionPaperForExamineer />,
      },
      {
        index: true,
        path: "/singleQuestionPaperForExamineer",
        element: <SingleQuestionPaperForExamineer />,
      },
      {
        index: true,
        path: "/allQuestionPapersOfExaminee",
        element: <AllQuestionPapersOfExaminee />,
      },
      {
        index: true,
        path: "/searchQuestionPaperbyExamineer",
        element: <SearchQuestionPaperbyExamineer />,
      },
      {
        index: true,
        path: "/createSingleQuestionPaper",
        element: <CreateQuestionPaper />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
