'use client'

import { useState } from 'react'
import Link from 'next/link'
import { RiMenu3Line } from "react-icons/ri";
import { FaCar, FaGlobe, FaHome, FaUser } from "react-icons/fa";
import { FaBeer, FaWallet, FaRegUser } from "react-icons/fa";
import { CiGlobe, CiSettings } from 'react-icons/ci'
import { IoMdSettings } from 'react-icons/io'
import { IoWalletSharp } from 'react-icons/io5'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
type NavItem = {
  href: string
  icon: any
  label: string
  subItems?: NavItem[]
}

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSubMenu = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }))
  }

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
    // Close all submenus when collapsing
    if (!isCollapsed) {
      setExpandedItems({})
    }
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
            className={`flex items-center flex-1 px-4 py-2 text-sm font-medium 
          text-white rounded-lg hover:text-white hover:bg-gray-700 ${isCollapsed ? 'justify-center' : ''}`}
            onClick={(e) => {
              if (hasSubItems) {
                e.preventDefault()
                toggleSubMenu(item.label)
              }
            }}
          >
            <span className={`text-[#00A699] font-bold ${isCollapsed ? 'mr-0' : 'mr-3'}`}>
              {item.icon}
            </span>
            {!isCollapsed && item.label}
          </Link>

          {hasSubItems && !isCollapsed && (
            <button
              onClick={() => toggleSubMenu(item.label)}
              className="p-2 mr-1 text-white hover:text-white"
            >
              <span> {isExpanded ? <FaChevronDown size={16} /> : <FaChevronRight size={16} />} </span>
            </button>
          )}
        </div>

        {hasSubItems && isExpanded && !isCollapsed && (
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
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`hidden md:flex md:flex-shrink-0 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className={`flex flex-col border-r bg-[#353535] ${isCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="flex items-center justify-between h-16 px-4 bg-[#00A699]">
          <h1 className="text-3xl font-inter text-white">
            {isCollapsed ? 'C' : (
              <>
                Ca<span className="text-black  ">b</span>tify
              </>
            )}
          </h1>
          <button onClick={toggleSidebar}>
            {/* <FontAwesomeIcon icon={faBars} className='text-white' /> */}

            <RiMenu3Line className='text-white' size={24} />



            {/* <FaBeer /> */}
          </button>
        </div>
        <div className="flex flex-col flex-grow overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-2">
            {navItems.map((item) => renderNavItem(item))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar