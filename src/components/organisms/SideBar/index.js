import { Link } from 'react-router-dom'
import { SideBarLabels } from '../../../utils/labels/sidebarLabels'
import { useState } from 'react'

export const SideBar = () => {
  const { Logo, Tabs } = SideBarLabels

  const [subMenuOpen, setSubMenuOpen] = useState(null)
  const [subMenuItems, setSubMenuItems] = useState([])

  const toggleSubMenu = subMenu => {
    if (subMenu === subMenuOpen) {
      setSubMenuOpen(null)
      setSubMenuItems([])
    } else {
      setSubMenuOpen(subMenu)
      setSubMenuItems(subMenu)
    }
  }

  return (
    <>
      <aside className='top-0 left-0 w-full h-full '>
        <div className='h-full max-w-52 px-3 py-4'>
          <Link
            to=''
            className='relative flex items-center mt-[2.375rem] ml-[1.7rem] mb-5 z-10'
          >
            {Logo}
          </Link>
          <ul className='space-y-2 mt-10 ml-[1rem] font-medium text-grey-700 leading-5 text-xs'>
            {Tabs.map(({ id, TabTitle, link, icon, subMenu }) => (
              <div key={id} className=''>
                {subMenu ? (
                  <div className='relative group'>
                    <div
                      className='flex items-center p-2 text-grey-700 rounded-lg cursor-pointer'
                      onClick={() => toggleSubMenu(subMenu)}
                    >
                      {icon}
                      <span className='ml-3'>{TabTitle}</span>
                    </div>
                    {subMenuOpen === subMenu &&
                      subMenuItems.map(({ id, TabTitle, link }) => (
                        <Link
                          key={id}
                          to={link}
                          className='flex items-center p-2 text-grey-700 rounded-lg ml-6 relative group'
                        >
                          <span className='ml-1 mt-2 text-[10px]'>{TabTitle}</span>
                          
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
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
