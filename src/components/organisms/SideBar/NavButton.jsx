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
        <div>
          <div
            className="flex items-center p-2 pl-3 text-grey-700 rounded-lg cursor-pointer"
            onClick={toggleSubMenu}
          >
            <div dangerouslySetInnerHTML={{ __html: icon }} />
            <span className="ml-3">{TabTitle}</span>
          </div>
          {subMenuOpen && (
            <div>
              {subMenu.map(({ title, redirectRoute }, index) => (
                <Link
                  key={`submenu_${index}`}
                  to={redirectRoute}
                  className="flex w-full items-center pl-4 before:-translate-y-2 text-grey-700 before:content-[''] before:h-6 before:w-4 before:border-l-2 before:border-b-2 before:border-[#E5E5E5]"
                >
                  <span className="text-[10px] text-gray-500 h-fit self-end pl-2">
                    {title}
                  </span>
                </Link>
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
          <div dangerouslySetInnerHTML={{ __html: icon }} />
          <span className="ml-3 mt-0.5">{TabTitle}</span>
        </Link>
      )}
    </div>
  );
};

export default NavButton;
