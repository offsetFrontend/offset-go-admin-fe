import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'
import { ReactComponent as Projects } from '../../assets/svgs/Projects.svg'
import { ReactComponent as Reports } from '../../assets/svgs/Reports.svg'
import { ReactComponent as Settings } from '../../assets/svgs/Settings.svg'
import { ReactComponent as Transactions } from '../../assets/svgs/Transactions.svg'
import { ReactComponent as Token } from '../../assets/svgs/token.svg'
import { ReactComponent as UserManage } from '../../assets/svgs/User Manage.svg'
import { ReactComponent as Home } from '../../assets/svgs/home.svg'
import { ReactComponent as Retirements } from '../../assets/svgs/retirements.svg'
import { ReactComponent as Transfer } from '../../assets/svgs/transfer.svg'
import { ReactComponent as Forms } from '../../assets/svgs/forms.svg'
import { ReactComponent as News } from '../../assets/svgs/news.svg'

export const SideBarLabels = {
  Logo: <Logo />,
  Tabs: [
    {
      id: '001',
      icon: <Home className='w-4 h-4' />,
      TabTitle: 'Home',
      link: '/'
    },
    {
      id: '002',
      icon: <Projects className='w-4 h-4' />,
      TabTitle: 'Projects',
      link: '/'
    },
    {
      id: '003',
      icon: <Transactions className='w-4 h-4' />,
      TabTitle: 'Transactions',
      link: '/'
    },
    {
      id: '004',
      icon: <Retirements className='w-5 h-4' />,
      TabTitle: 'Retirements',
      link: '/'
    },
    {
      id: '005',
      icon: <Transfer className='w-4 h-3' />,
      TabTitle: 'Transfer Request',
      link: '/'
    },
    {
      id: '006',
      icon: <Forms className='w-4 h-4' />,
      TabTitle: 'Forms',
      link: '/',
      subMenu: [  
      {
        id: '0061',
        TabTitle: 'Contact Us',
        link: '/contact-us'
      },
      {
        id: '0062',
        TabTitle: 'Inquire',
        link: '/inquire'
      },
      {
        id: '0063',
        TabTitle: 'Subscription',
        link: '/subscription'
      }
    ]
    },
    {
      id: '007',
      icon: <UserManage className='w-4 h-4' />,
      TabTitle: 'Marketplace Users',
      link: '/'
    },
    {
      id: '008',
      icon: <Token className='w-4 h-4' />,
      TabTitle: 'Token History',
      link: '/'
    },
    {
      id: '009',
      icon: <Reports className='w-4 h-4' />,
      TabTitle: 'Report',
      link: '/'
    },
    {
      id: '010',
      icon: <News className='w-4 h-4' />,
      TabTitle: 'News/Blogs',
      link: '/'
    },

    {
        id: '011',
        icon: <Settings className='w-4 h-4' />,
        TabTitle: 'Settings',
        link: '/',
        subMenu: [  
          {
            id: '0111',
            TabTitle: 'Roles',
            link: '/roles'
          },
          {
            id: '0112',
            TabTitle: 'User List',
            link: '/user-list'
          },
          {
            id: '0113',
            TabTitle: 'KYC Pages',
            link: '/kyc-pages'
          },
          {
            id: '0114',
            TabTitle: 'Project Upload',
            link: '/project-upload'
          },
          {
            id: '0115',
            TabTitle: 'OffsetGo Details',
            link: '/offsetgo-details'
          },
          {
            id: '0116',
            TabTitle: 'Dashboard Manage',
            link: '/dashboard-manage'
          },
          {
            id: '0117',
            TabTitle: 'Static pages',
            link: '/static-pages'
          },
          {
            id: '0118',
            TabTitle: 'Footer',
            link: '/footer'
          }
        ]
      }
  ]
}
