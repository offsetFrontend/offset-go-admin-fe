import React from 'react'
import { Link } from 'react-router-dom'
import { SideBarLabels } from '../../../utils/labels/sidebarLabels'

import NavButton from './navButton'

const SideBar = () => {
  const { Tabs } = SideBarLabels

  return (
    <>
      <aside className='w-[20%] h-full bg-white'>
        <div className='h-full px-3 py-4'>
          <Link
            to=''
            className=' flex justify-center items-center mt-[2.375rem] mb-5 '
          >
            <img
              src='https://offsetgo.s3.ap-south-1.amazonaws.com/assets/Images/Offsetgo-logo.png'
              alt='Logo'
              className='w-20 h-16'
            />
          </Link>
          <ul className='space-y-2 mt-10 ml-[1rem] font-medium text-gray-500 leading-5 text-xs'>
            {Tabs.map(({ id, TabTitle, link, icon, subMenu }) => (
              <NavButton
                key={id}
                id={id}
                TabTitle={TabTitle}
                link={link}
                icon={icon}
                subMenu={subMenu}
              />
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default SideBar
