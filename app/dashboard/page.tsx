
import RevenueChart from '@/components/RevenueChat'
import RecentActivity from '@/components/RecentActivity'
import StatsCard from '@/components/StatsCard'

const DashboardPage = () => {
  const stats = [
    { title: 'Total\nOrders', value: '50' },
    { title: 'Total\nRevenue', value: '50' },
    { title: 'Active\nUsers', value: '50' },
    { title: 'Pending\nOrders', value: '50' },
    { title: 'Total\nOrders', value: '50' },
    { title: 'Total\nRevenue', value: '50' },
    { title: 'Active\nUsers', value: '50' },
    { title: 'Pending\nOrders', value: '50' },
  ]

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>

      <div className="grid grid-cols-1 mb-6">
        <RevenueChart />
        {/* <RecentActivity /> */}
      </div>
    </>
    //   </main>
    // </div>
  )
}

export default DashboardPage