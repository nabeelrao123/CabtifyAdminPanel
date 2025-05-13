// import Header from '@/components/Header'
// import Sidebar from '@/components/Sidebar'
// import MobileSidebar from '@/components/MobileSidebar'
// import StatsCard from '@/components/StatsCard'
// // import RevenueOverview from '@/components/RevenueOverview'
// import RecentActivity from '@/components/RecentActivity'

// export default function Home() {
//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar />
//       <MobileSidebar />
      
//       <div className="flex flex-col flex-1 overflow-hidden">
//         <Header />
        
//         <main className="flex-1 overflow-auto p-4 bg-[#F0F0F0]">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             <StatsCard title="Total Orders" value="50" />
//             <StatsCard title="Total Revenue" value="$5,000" />
//             <StatsCard title="Active Users" value="120" />
//             <StatsCard title="Pending Orders" value="12" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//             {/* <RevenueOverview /> */}
//             <RecentActivity />
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }
'use client'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import DashboardPage from './dashboard/page'

export default function Home() {
  return (
    <>
      {/* <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header /> */}
        <DashboardPage />
      {/* </div> */}
    </>
  )
}