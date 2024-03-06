import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavButton = ({ id, TabTitle, link, icon, subMenu }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div key={id} className="">
      {subMenu ? (
        <div className="relative group">
          <div
            className="flex items-center p-2 text-grey-700 rounded-lg cursor-pointer"
            onClick={toggleSubMenu}
          >
            {icon}
            <span className="ml-3">{TabTitle}</span>
          </div>
          {subMenuOpen && (
            <div className="">
              {subMenu.map(({ id, TabTitle, link }) => (
                <div
                  key={id}
                  to={link}
                  className="flex w-full items-center pl-4 before:-translate-y-2 text-grey-700 before:content-[''] before:h-6 before:w-4 before:border-l-2 before:border-b-2 before:border-[#E5E5E5]"
                >
                  <span className="text-[10px] text-gray-500 h-fit self-end pl-2">
                    {TabTitle}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          to={link}
          href="#"
          className="flex items-center p-2 text-grey-700 rounded-lg "
        >
          {icon}
          <span className="ml-3 mt-0.5">{TabTitle}</span>
        </Link>
      )}
    </div>
  );
};

export default NavButton;
