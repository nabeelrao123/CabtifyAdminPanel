'use client';
import React from 'react'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store'

interface StatsCardProps {
  title: string
  value: string | number
}


const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  const color = useSelector((state: RootState) => state.color.color);

 
  return (
    <div className={`bg-[${color === '#353535' ? '#353535' : '#ffffff'}] rounded-lg p-4 border`} >
      <div className="flex items-center justify-between">
        <div>
          <p
            className="font-inter text-[#00A699] font-medium text-[20px] leading-[32px] tracking-[0%]">
            Total <br /> Orders
          </p>
        </div>
        <div>
          <p
            className={` font-inter text-${color === '#353535' ? 'white' : '#353535'} font-semibold text-[30px] leading-[100%] tracking-[0%] text-right`}>
            {value}
          </p>

        </div>
      </div>
    </div>
  )
}

export default StatsCard