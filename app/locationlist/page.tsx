'use client'


import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
export default function Home() {
    return (
        <>
            {/* <div className="flex flex-col flex-1 overflow-hidden"> */}
                {/* <main className="flex-1 overflow-auto p-4 bg-light"> */}
                    <div className="grid grid-cols-1 mb-6">
                        <div className="bg-white rounded-lg border border-gray-300 lg:col-span-2">
                            <div className="bg-[#353535] p-4 rounded-lg">
                                {/* <div className='flex gap-x-4' >
 */}

                                <div className="flex space-x-2">
                                    {['Daily', 'Weekly', 'Monthly'].map((item) => (
                                        <div key={item} className="flex items-center">
                                            <input
                                                disabled
                                                id={`${item.toLowerCase()}-checkbox`}
                                                type="checkbox"
                                                className="w-4 h-4  bg-white border-white rounded-sm
                                                     focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor={`${item.toLowerCase()}-checkbox`}
                                                className="ms-2 text-sm font-medium text-white"
                                            >
                                                {item}
                                            </label>
                                        </div>
                                    ))}
                                    {/* </div> */}

                                </div>
                            </div>

                            <div className="p-4 ">
                                <h3 className="text-lg font-medium text-[#353535]">Add Country</h3>
                                <div >
                                    <div>
                                        <input
                                            placeholder='Search for map'
                                            type="text"
                                            id="small-input"
                                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                {/* </main> */}
            {/* </div> */}
            {/* </div> */}
        </>
    )
}