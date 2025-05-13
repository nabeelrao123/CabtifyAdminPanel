'use client'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import RevenueChart from '@/components/RevenueChat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserPlus,
    faShoppingCart,
    faBoxOpen,
    faComment
} from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'
import { IoIosAddCircle } from "react-icons/io";

export default function DriverList() {

    const activities = [
        {
            icon: faUserPlus,
            color: 'bg-blue-500 bg-opacity-20 text-blue-400',
            title: 'New user registered',
            description: 'John Smith - 2 hours ago'
        },
        {
            icon: faShoppingCart,
            color: 'bg-green-500 bg-opacity-20 text-green-400',
            title: 'New order received',
            description: 'Order #1234 - 4 hours ago'
        },
        {
            icon: faBoxOpen,
            color: 'bg-purple-500 bg-opacity-20 text-purple-400',
            title: 'Product added',
            description: '"Premium Headphones" - 6 hours ago'
        },
        {
            icon: faComment,
            color: 'bg-yellow-500 bg-opacity-20 text-yellow-400',
            title: 'New review',
            description: '5 stars for "Wireless Earbuds" - 1 day ago'
        },
    ]
    return (
        <>
            <div className="flex flex-col flex-1 overflow-hidden">
                <main className="flex-1 overflow-auto p-4 bg-light">
                    {/* <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-medium text-white">Recent Orders</h3>
                            <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-700">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-700">
                                    <tr>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">#1234</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">John Smith</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">2023-05-15</td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500 bg-opacity-20 text-green-400">Completed</span>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">$129.99</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                                            <button className="text-blue-400 hover:text-blue-300 mr-2"><i className="fas fa-eye"></i></button>
                                            <button className="text-gray-400 hover:text-gray-300"><i className="fas fa-ellipsis-v"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">#1233</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">Sarah Johnson</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">2023-05-14</td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500 bg-opacity-20 text-yellow-400">Processing</span>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">$89.99</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                                            <button className="text-blue-400 hover:text-blue-300 mr-2"><i className="fas fa-eye"></i></button>
                                            <button className="text-gray-400 hover:text-gray-300"><i className="fas fa-ellipsis-v"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">#1232</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">Michael Brown</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">2023-05-14</td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500 bg-opacity-20 text-blue-400">Shipped</span>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">$249.99</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                                            <button className="text-blue-400 hover:text-blue-300 mr-2"><i className="fas fa-eye"></i></button>
                                            <button className="text-gray-400 hover:text-gray-300"><i className="fas fa-ellipsis-v"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">#1231</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">Emily Davis</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">2023-05-13</td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-500 bg-opacity-20 text-red-400">Cancelled</span>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">$59.99</td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                                            <button className="text-blue-400 hover:text-blue-300 mr-2"><i className="fas fa-eye"></i></button>
                                            <button className="text-gray-400 hover:text-gray-300"><i className="fas fa-ellipsis-v"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}


                    <div className='flex items-center gap-x-2 mb-6 ' >
                        <div><p className="font-inter font-semibold text-[#353535] text-[15px] leading-[40px] tracking-[0%]">
                            show
                        </p>
                        </div>
                        <div className='max-w-15' >
                            <select id="countries" className="bg-gray-50 
                            border border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>1</option>
                                <option value="US">2</option>
                                <option value="CA">3</option>
                                <option value="FR">4</option>
                                <option value="DE">5</option>
                            </select>
                        </div>
                        <div><p className="font-inter font-semibold text-[#353535] text-[15px] leading-[40px] tracking-[0%]">
                            enteries
                        </p>
                        </div>

                    </div>









                    <div className='flex justify-between items-center mb-6' >



                        <div className="relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <Button size={'default'} variant='default' icon={<IoIosAddCircle />}  >Click me</Button>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-50
                             dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </main>
            </div>
        </>
    )
}