/* eslint-disable react/prop-types */
import { AuthContext } from "@/hooks/AuthContextProvider";
import LoaderScreen from "@/others/LoadingScreen";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateAdminRoute({ children }) {
  const token = Cookies.get("user");
  const role = Cookies.get("userRole");

  const { pathname } = useLocation();
  const { user, loginChecking } = useContext(AuthContext);
  console.log(user);
  if (loginChecking && !user) {
    return <LoaderScreen />;
  }

  if (!token) {
    return <Navigate to={"/login"} replace={true} state={{ path: pathname }} />;
  }

  if (role != "admin") {
    return (
      <Navigate
        to={"/onlyForAdmin"}
        replace={true}
        state={{ path: pathname }}
      />
    );
  }
  return children;
}
