import React from "react";
import SideBar from "../components/organisms/SideBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex w-full h-full">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Root;
