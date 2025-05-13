// import Sidebar from '../components/Sidebar'
// import Header from '../components/Header'
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
import RecentActivity from '@/components/RecentActivity'
export default function Home() {

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 gap-x-4">
                            <RecentActivity />
                            <RecentActivity />
                            <RecentActivity />
                            <RecentActivity />
                    </div>
                </main>
            </div>
        </>
    )
}