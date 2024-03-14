import React from "react";
import SideBar from "../components/organisms/SideBar";
import { Outlet, useLoaderData } from "react-router-dom";
import { getAuthToken, removeAuthToken } from "../utils/token";
import { useAuthContext } from "../context/AuthContext";

const Root = () => {
  const { success } = useLoaderData();
  const { setAuthUser } = useAuthContext();
  if (success === false) {
    setAuthUser(null);
  }

  return (
    <div className="flex w-full">
      <SideBar />
      <Outlet />
    </div>
  );
};

export const loader = async () => {
  const token = getAuthToken();
  if (!token) {
    return { success: false };
  }
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/user/auth`,
    {
      method: "GET",
      headers: {
        "x-access-token": token,
      },
    }
  );
  if (!response.ok) {
    removeAuthToken();
    localStorage.removeItem("offset-go-admin-user");
    return { success: false };
  }
  return { success: true };
};

export default Root;
