'use client'

import { useState } from 'react'
import Image from 'next/image'
import MobileSidebar from './MobileSidebar'
import group2 from '../assets/Group (2).png'
import group3 from '../assets/Group (3).png'
import img1 from '../assets/image (1).png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '@/app/redux/colorSlice'
import { AppDispatch, RootState } from '@/app/redux/store'

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  const toggleColor = (bgColor: string) => dispatch(changeColor(bgColor))
  return (
    <header className="flex items-center justify-between h-16  bg-white border-b">
      <div className="flex items-center">
        <MobileSidebar />
        <h2 className="text-xl text-dark font-inter ml-4">Dashboard</h2>
      </div>

      <div className="flex items-center space-x-2">
        <div className="hidden lg:flex items-center">
          <Image
            src={group2}
            width={16}
            height={16}
            alt="Countries"

          />
          <span className="ml-2 hidden md:inline text-[#353535] font-inter">All countries</span>
          <RiArrowDropDownLine
            className="ml-1 text-xs text-[#353535]"
            size={24}
          />
        </div>
        <div className="hidden lg:block lg:h-7 border-r-2 border-[#353535]" />
        {/* /// toggle code start */}
        <div
          className="hidden lg:flex bg-[#00A699]  
           rounded-full w-15 h-5 gap-x-1 p-1 items-center justify-between"
        >
          <button onClick={() => { toggleColor('#F0F0F0') }} className="w-4 h-4 rounded-full flex items-center justify-center bg-white bg-opacity-20">
            <Image
              src={group3}
              width={16}
              height={16}
              alt="Light theme icon"
              className="text-white"
            />
          </button>
          <button className="bg-[#353535] w-4 h-4 rounded-full  " onClick={() => { toggleColor('#353535') }} ></button>

        </div>

        <div className="hidden lg:block lg:h-7 border-r-2 border-[#353535]" />

        <button type="button" className=" hidden lg:block p-2 rounded-lg">
          <span className="sr-only">Notifications</span>
          <IoIosNotifications size={24} className='text-[#00A699]' />

        </button>



        <div className="relative bg-[#00A699] h-16 px-4 flex items-center -mr-4">
          <button
            type="button"
            className="flex items-center text-sm focus:outline-none"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              src={img1}
              width={32}
              height={32}
              alt="User profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-2 hidden lg:flex flex-col items-start">
              <span className="text-white">Super Admin</span>
            </div>

            <RiArrowDropDownLine
              className="ml-1 text-xs text-white"
              size={24}
            />

          </button>

          {/* Dropdown menu */}
          {isUserMenuOpen && (
            <div className="absolute right-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              {['Your Profile', 'Settings', 'Signout'].map((val) => {
                return (<>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => e.preventDefault()}
                  >
                    {val}
                  </a>
                </>)
              })}


              <div className='flex items-center justify-center rounded-full ' >
                <div className='rounded-full bg-[#00A699] px-2 py-1 flex item-center gap-4 ' >

                  <button onClick={() => { toggleColor('#F0F0F0') }} className="w-4 h-4 rounded-full flex items-center justify-center bg-white bg-opacity-20">
                    <Image
                      src={group3}
                      width={16}
                      height={16}
                      alt="Light theme icon"
                      className="text-white"
                    />
                  </button>
                  <button className="bg-[#353535] w-4 h-4 rounded-full  " onClick={() => { toggleColor('#353535') }} ></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </header>
  )
}

export default Header