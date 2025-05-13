import Image from 'next/image'
import img from '../assets/image.png'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store'

interface ShowEntriesProps {
    itemsPerPageOptions: any[];
    handleChange: (e: any) => void;
    itemsPerPage: any;
  }
const ShowEntries = ({ itemsPerPageOptions, handleChange, itemsPerPage }: ShowEntriesProps) => {
   const values=[10,20,30]
    const [nos,setnos]=useState(values[0])
    const color = useSelector((state: RootState) => state.color.color);


    return (
        <div className='flex items-center space-x-2'>
            <p className={`text-[${color === '#353535' ? 'white'  : '#353535'}]  font-inter font-semibold
            
            text-[15px] leading-[40px] tracking-[0%]`}>
                Show
            </p>
            <select
                value={itemsPerPage}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500
          focus:border-blue-500 block p-2"
            >
                {itemsPerPageOptions.map((cval: any) => {
                    return (<>
                        <option value={cval}>{cval}</option>
                    </>)
                })}

            </select>

{/* 
               <select
                // value={itemsPerPage}
               value={nos}
                onChange={(e:any)=>{setnos(e.target.value)}}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500
          focus:border-blue-500 block p-2"
            >
                {values.map((cval: any) => {
                    return (<>
                        <option value={cval}>{cval}</option>
                    </>)
                })}

            </select> */}
            <p className={`text-[${color === '#353535' ? 'white'  : '#353535'}] font-inter font-semibold text-[15px] leading-[40px] tracking-[0%]`}>
                entries
            </p>
        </div>
    )
}

export default ShowEntries