import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
});

//for handling refresh token*********************
const refreshToken = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/refresh`,
      {
        refreshToken: Cookies.get("refresh_token"), // Get refresh token from cookies
      }
    );

    const newAccessToken = response.data.accessToken;

    // Update token in Cookies
    Cookies.set("user", newAccessToken, { secure: true, sameSite: "Strict" });

    return newAccessToken;
  } catch (error) {
    console.error("Refresh token failed", error);
    Cookies.remove("user"); // Remove expired access token
    Cookies.remove("refreshToken"); // Remove expired refresh token
    window.location.href = "/login"; // Redirect to login page
    return null;
  }
};

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log("checking error from axiosSecure", error);
        const originalRequest = error.config;

        if (error?.message === "jwt expired" && !originalRequest._retry) {
          console.log(
            "token has been expired!!!, getting token by refresh token"
          );

          // originalRequest._retry = true; // Prevent infinite loops

          // const newAccessToken = await refreshToken();

          // if (newAccessToken) {
          //   axiosSecure.defaults.headers.common[
          //     "Authorization"
          //   ] = `Bearer ${newAccessToken}`;
          //   originalRequest.headers[
          //     "Authorization"
          //   ] = `Bearer ${newAccessToken}`;
          //   return axiosSecure(originalRequest); // Retry the failed request
          // }
        }

        if (error.response.status === 403) {
          Cookies.remove("user");
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
