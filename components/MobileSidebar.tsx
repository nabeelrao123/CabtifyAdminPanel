// 'use client'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faCog,
//   faChevronDown,
//   faChevronRight
// } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react'
// import Link from 'next/link'
// import {
//   faTachometerAlt,
//   faUsers,
//   faBox,
//   faShoppingCart,
//   faTimes,
//   faBars
// } from '@fortawesome/free-solid-svg-icons'

// type NavItem = {
//   href: string
//   icon: any
//   label: string
//   subItems?: NavItem[]
// }


// const MobileSidebar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen)
//   }
//   const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
//   const toggleSubMenu = (label: string) => {
//     setExpandedItems(prev => ({
//       ...prev,
//       [label]: !prev[label]
//     }))
//   }

//   const navItems: NavItem[] = [
//     { href: '/dashboard', icon: faTachometerAlt, label: 'Dashboard' },
//     {
//       href: '#',
//       icon: faUsers,
//       label: 'Track',
//       subItems: [
//         { href: '/users/list', icon: faUsers, label: 'All Users' },
//         { href: '/users/add', icon: faUsers, label: 'Add User' }
//       ]
//     },


//     {
//       href: '#',
//       icon: faUsers,
//       label: 'Country',
//       subItems: [
//         { href: '/users/list', icon: faUsers, label: 'All Users' },
//         { href: '/users/add', icon: faUsers, label: 'Add User' }
//       ]
//     },
//     {
//       href: '#',
//       icon: faBox,
//       label: 'User',
//       subItems: [
//         { href: '/products/list', icon: faBox, label: 'All Products' },
//         { href: '/products/categories', icon: faBox, label: 'Categories' }
//       ]
//     },
//     {
//       href: '#',
//       icon: faShoppingCart,
//       label: 'Passengers',
//       subItems: [
//         { href: '/orders/list', icon: faShoppingCart, label: 'All Orders' },
//         { href: '/orders/returns', icon: faShoppingCart, label: 'Returns' }
//       ]
//     },

//     {
//       href: '#',
//       icon: faShoppingCart,
//       label: 'Wallets',
//       subItems: [
//         { href: '/orders/list', icon: faShoppingCart, label: 'All Orders' },
//         { href: '/orders/returns', icon: faShoppingCart, label: 'Returns' }
//       ]
//     }, {
//       href: '#',
//       icon: faShoppingCart,
//       label: 'Driver',
//       subItems: [
//         { href: '/orders/list', icon: faShoppingCart, label: 'All Orders' },
//         { href: '/orders/returns', icon: faShoppingCart, label: 'Returns' }
//       ]
//     }, {
//       href: '#',
//       icon: faShoppingCart,
//       label: 'Track Assets',
//     },
//     {
//       href: '#',
//       icon: faShoppingCart,
//       label: 'Services',
//       subItems: [
//         { href: '/orders/list', icon: faShoppingCart, label: 'All Orders' },
//         { href: '/orders/returns', icon: faShoppingCart, label: 'Returns' }
//       ]
//     },
//     {
//       href: '#',
//       icon: faShoppingCart,
//       label: 'Documents',
//       subItems: [
//         { href: '/orders/list', icon: faShoppingCart, label: 'All Orders' },
//         { href: '/orders/returns', icon: faShoppingCart, label: 'Returns' }
//       ]
//     },

//     {
//       href: '#',
//       icon: faShoppingCart,
//       label: 'Ride',
//       subItems: [
//         { href: '/orders/list', icon: faShoppingCart, label: 'All Orders' },
//         { href: '/orders/returns', icon: faShoppingCart, label: 'Returns' }
//       ]
//     },
//     { href: '/settings', icon: faCog, label: 'Settings' }
//   ]


//   const renderNavItem = (item: NavItem) => {
//     const hasSubItems = item.subItems && item.subItems.length > 0
//     const isExpanded = expandedItems[item.label]
//     return (
//       <div key={item.label} className="space-y-1">
//         <div className="flex items-center">
//           <Link
//             href={item.href}
//             className="flex items-center flex-1 px-4 py-2 text-sm font-medium 
//           text-white rounded-lg hover:text-white hover:bg-gray-700"
//             onClick={(e) => {
//               if (hasSubItems) {
//                 e.preventDefault()
//                 toggleSubMenu(item.label)
//               }
//             }}
//           >
//             <FontAwesomeIcon icon={item.icon} className="mr-3 text-[#00A699]" />
//             {item.label}
//           </Link>

//           {hasSubItems && (
//             <button
//               onClick={() => toggleSubMenu(item.label)}
//               className="p-2 mr-1 text-gray-400 hover:text-white"
//             >
//               <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} />
//             </button>
//           )}
//         </div>

//         {hasSubItems && isExpanded && (
//           <div className="ml-4 space-y-1">
//             {item?.subItems?.map((subItem) => (
//               <Link
//                 key={subItem.label}
//                 href={subItem.href}
//                 className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg
//                hover:text-white hover:bg-gray-700"
//               >
//                 <FontAwesomeIcon icon={subItem.icon} className="mr-3 text-[#00A699]" />
//                 {subItem.label}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>

//     )
//   }


//   return (
//     <>
//       <button
//         type="button"
//         className="p-2 mr-2 text-[#353535]  md:hidden"
//         onClick={toggleSidebar}
//       >
//         <span className="sr-only">Open sidebar</span>
//         <FontAwesomeIcon icon={faBars} />
//       </button>

//       <div
//         className={`md:hidden fixed inset-0 z-40 ${isOpen ? 'block' : 'hidden'}`}
//         id="mobile-sidebar"
//       >
//         <div
//           className="fixed inset-0 bg-gray-600 bg-opacity-75"
//           aria-hidden="true"
//           onClick={toggleSidebar}
//         />

//         <div className="relative  flex flex-col w-72 max-w-xs h-full bg-[#353535]">
//           <div className="flex items-center h-16 px-4 bg-[#00A699]">
//             <h1 className="text-3xl font-inter text-white">
//               Ca<span className="text-[#353535]">b</span>tify
//             </h1>
//             <button
//               type="button"
//               className="ml-auto p-2 rounded-md text-white"
//               onClick={toggleSidebar}
//             >
//               <span className="sr-only">Close sidebar</span>
//               <FontAwesomeIcon icon={faBars} />
//             </button>
//           </div>

//           <div className="flex flex-col flex-grow overflow-y-auto">
//             <nav className="flex-1 px-2 py-4 space-y-2">
//               {navItems.map((item) => renderNavItem(item))}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default MobileSidebar



'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCog,
  faChevronDown,
  faChevronRight,
  faHome,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import {
  faTachometerAlt,
  faUsers,
  faBox,
  faShoppingCart,
  faTimes,
  faBars
} from '@fortawesome/free-solid-svg-icons'

import { FaCar, FaChevronDown, FaChevronRight, FaGlobe, FaHome, FaUser, FaWallet } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { CiGlobe } from 'react-icons/ci'
import { IoWalletSharp } from 'react-icons/io5'
import { IoMdSettings } from 'react-icons/io'



type NavItem = {
  href: string
  icon: any
  label: string
  subItems?: NavItem[]
}

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})



  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleSubMenu = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }))
  }

 const navItems: NavItem[] = [
    { href: '/dashboard', icon: <FaHome size={16} />, label: 'Dashboard' },
    {
      href: '#',
      icon: <FaUser size={16} />,
      label: 'Track',
      subItems: [
        { href: '/users/list', icon: <FaUser size={16} />, label: 'All Users' },
        { href: '/users/add', icon: <FaUser size={16} />, label: 'Add User' }
      ]
    },
    {
      href: '#',
      icon: <FaGlobe size={16} />,
      label: 'Country',
      subItems: [
        { href: '/users/list', icon: <CiGlobe size={16} />, label: 'All Users' },
        { href: '/users/add', icon: <CiGlobe size={16} />, label: 'Add User' }
      ]
    },
    {
      href: '/wallettopuprequest',
      icon: <IoWalletSharp size={16} />,
      label: 'Wallet',
      // subItems: [
      //   { href: '/products/list', icon: <IoWalletSharp size={16} />, label: 'All Products' },
      //   { href: '/products/categories', icon: <IoWalletSharp size={16} />, label: 'Categories' }
      // ]
    },

    {
      href: '/adduser',
      icon: <FaUser size={16} />,
      label: 'Users',
    },

    {
      href: '#',
      icon: <FaCar size={16} />,
      label: 'Ride',
      subItems: [
        { href: '/products/list', icon: <IoWalletSharp size={16} />, label: 'All Products' },
        { href: '/products/categories', icon: <IoWalletSharp size={16} />, label: 'Categories' }
      ]
    },
    { href: '/settings', icon: <IoMdSettings size={16} />, label: 'Settings' }
  ]

  const renderNavItem = (item: NavItem) => {
    const hasSubItems = item.subItems && item.subItems.length > 0
    const isExpanded = expandedItems[item.label]
    return (


      <div key={item.label} className="space-y-1">
        <div className="flex items-center">
          <Link
            href={item.href}
            className="flex items-center flex-1 px-4 py-2 text-sm font-medium 
            text-white rounded-lg hover:text-white hover:bg-gray-700"
            onClick={(e) => {
              if (hasSubItems) {
                e.preventDefault()
                toggleSubMenu(item.label)
              }
            }}
          >


            <span className="mr-3 text-[#00A699] font-bold ">
              {item.icon}
            </span>






            {/* <FontAwesomeIcon icon={item.icon} className="mr-3 text-[#00A699]" /> */}
            {item.label}
          </Link>

          {hasSubItems && (
            <button
              onClick={() => toggleSubMenu(item.label)}
              className="p-2 mr-1 text-gray-400 hover:text-white"
            >
              {/* <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} /> */}

              <span> {isExpanded ? <FaChevronDown size={16} /> : <FaChevronRight size={16} />} </span>
            </button>
          )}
        </div>

        {hasSubItems && isExpanded && (
          <div className="ml-4 space-y-1">
            {item?.subItems?.map((subItem) => (
              <Link
                key={subItem.label}
                href={subItem.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg
                 hover:text-white hover:bg-gray-700"
              >

                <span className="mr-3 text-[#00A699]">
                  {subItem.icon}
                </span>
                {/* <FontAwesomeIcon icon={subItem.icon} className="mr-3 text-[#00A699]" /> */}
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>


      //////    OLD CODE BEFORE REACT ICON WORK/////
      // <div key={item.label} className="space-y-1">
      //   <div className="flex items-center">
      //     <Link
      //       href={item.href}
      //       className="flex items-center flex-1 px-4 py-2 text-sm font-medium 
      //       text-white rounded-lg hover:text-white hover:bg-gray-700"
      //       onClick={(e) => {
      //         if (hasSubItems) {
      //           e.preventDefault()
      //           toggleSubMenu(item.label)
      //         }
      //       }}
      //     >
      //       <FontAwesomeIcon icon={item.icon} className="mr-3 text-[#00A699]" />
      //       {item.label}
      //     </Link>

      //     {hasSubItems && (
      //       <button
      //         onClick={() => toggleSubMenu(item.label)}
      //         className="p-2 mr-1 text-gray-400 hover:text-white"
      //       >
      //         <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} />
      //       </button>
      //     )}
      //   </div>

      //   {hasSubItems && isExpanded && (
      //     <div className="ml-4 space-y-1">
      //       {item?.subItems?.map((subItem) => (
      //         <Link
      //           key={subItem.label}
      //           href={subItem.href}
      //           className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg
      //            hover:text-white hover:bg-gray-700"
      //         >
      //           <FontAwesomeIcon icon={subItem.icon} className="mr-3 text-[#00A699]" />
      //           {subItem.label}
      //         </Link>
      //       ))}
      //     </div>
      //   )}
      // </div>

      //// OLD CODE BEFORE ICON WROK END
    )
  }

  return (
    <>
      <button
        type="button"
        className="p-2 mr-2 text-[#353535] md:hidden"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        {/* <FontAwesomeIcon icon={faBars} /> */}
        <RiMenu3Line className='text-[#353535]' size={24} />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-xs transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full bg-[#353535]">
          <div className="flex items-center h-16 px-4 bg-[#00A699]">
            <h1 className="text-3xl font-inter text-white">
              Ca<span className="text-[#353535]">b</span>tify
            </h1>
            <button
              type="button"
              className="ml-auto p-2 rounded-md text-white"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Close sidebar</span>
              {/* <FontAwesomeIcon icon={faTimes} /> */}

              <RiMenu3Line className='text-white' size={24} />


            </button>
          </div>

          <div className="flex flex-col flex-grow overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-2">
              {navItems.map((item) => renderNavItem(item))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileSidebar