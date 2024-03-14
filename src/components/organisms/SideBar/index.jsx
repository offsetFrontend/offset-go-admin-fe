import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import Loader from "./Loader";
import { useSidenav } from "../../../hooks/useSidenav";

const SideBar = () => {
  const { loading, sidenavData } = useSidenav();

  return (
    <>
      <aside className="w-[16%] h-full bg-white">
        <div className="h-full px-3 py-4">
          <Link
            to=""
            className=" flex justify-center items-center mt-[2.375rem] mb-12 "
          >
            <img
              src="https://offsetgo.s3.ap-south-1.amazonaws.com/assets/Images/Offsetgo-logo.png"
              alt="Logo"
              className="w-20 h-16"
            />
          </Link>
          {loading ? (
            <Loader />
          ) : (
            <ul className="py-1 px-4 font-medium text-gray-500 leading-5 text-xs">
              {sidenavData.map(
                ({ title, redirectRoute, svgPath, subMenu }, index) => (
                  <NavButton
                    key={`sidenav_${index}`}
                    TabTitle={title}
                    link={redirectRoute}
                    icon={svgPath}
                    subMenu={subMenu}
                  />
                )
              )}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
