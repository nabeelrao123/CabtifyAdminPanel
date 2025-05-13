'use client';
import Image from 'next/image'
import img from '../assets/image.png'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store'

const RevenueChart = () => {

   const color = useSelector((state: RootState) => state.color.color);
  
   
  return (
    <div className= {`bg-[${color === '#353535' ? '#353535' : '#ffffff'}]  rounded-lg border border-gray-300 lg:col-span-2`}>
      <div className="bg-[#353535] p-4 rounded-lg">
        <h3 className="text-lg font-medium text-[#00A699]">Live Tracking</h3>
      </div>

      <div className="p-4">
        <div className="flex space-x-2">
          {['Daily', 'Weekly', 'Monthly'].map((item) => (
            <div key={item} className="flex items-center">
              <input
                disabled
                id={`${item.toLowerCase()}-checkbox`}
                type="checkbox"
                className= {`bg-[${color === '#353535' ? 'gray-100' : '#ffffff'}]  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500`}
              />
              <label
                htmlFor={`${item.toLowerCase()}-checkbox`}
                className="ms-2 text-sm font-medium text-gray-400"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <Image 
            src={img} 
            width={800} 
            height={400} 
            alt="Revenue chart" 
            className="w-full" 
          />
        </div>
      </div>
    </div>
  )
}

export default RevenueChart