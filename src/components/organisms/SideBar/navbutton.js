import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({ id, TabTitle, link, icon, subMenu }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div key={id} className=''>
      {subMenu ? (
        <div className='relative group'>
          <div
            className='flex items-center p-2 text-grey-700 rounded-lg cursor-pointer'
            onClick={toggleSubMenu}
          >
            {icon}
            <span className='ml-3'>{TabTitle}</span>
          </div>
          {subMenuOpen && (
            <div className="">
              {subMenu.map(({ id, TabTitle, link }) => (
                <Link
                  key={id}
                  to={link}
                  className='flex items-center p-2 text-grey-700 rounded-lg ml-6 relative group mt-[-0.8rem]'
                >
                  <span className=' mt-2 ml-3 text-[10px]'>{TabTitle}</span>
                  <div className="absolute left-[-10px] top-[-15px] transform -translate-y-3/4 before:block before:content before:'' w-4 h-4 fill-current text-gray-500 group-hover:text-gray-700 z-0">
                            <svg
                              width='18'
                              height='55'
                              viewBox='0 0 18 63'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M1 1L0.999998 57'
                                stroke='#E5E5E5'
                                stroke-linecap='round'
                              />
                              <path
                                d='M1 57H18H1ZM18 62.5H6C2.96243 62.5 0.5 60.0376 0.5 57H1.5C1.5 59.4853 3.51472 61.5 6 61.5H18V62.5ZM6 62.5C2.96243 62.5 0.5 60.0376 0.5 57H1.5C1.5 59.4853 3.51472 61.5 6 61.5V62.5ZM18 57V62V57Z'
                                fill='#E5E5E5'
                              />
                            </svg>
                          </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          to={link}
          href='#'
          className='flex items-center p-2 text-grey-700 rounded-lg '
        >
          {icon}
          <span className='ml-3 mt-0.5'>{TabTitle}</span>
        </Link>
      )}
    </div>
  );
};

export default NavButton;
