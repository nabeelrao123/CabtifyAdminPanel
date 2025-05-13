interface ActivityItemProps {
    icon: string
    color: 'blue' | 'green' | 'purple' | 'yellow'
    title: string
    description: string
  }
  
  const colorClasses = {
    blue: 'bg-blue-500 bg-opacity-20 text-blue-400',
    green: 'bg-green-500 bg-opacity-20 text-green-400',
    purple: 'bg-purple-500 bg-opacity-20 text-purple-400',
    yellow: 'bg-yellow-500 bg-opacity-20 text-yellow-400',
  }
  
  export default function ActivityItem({ icon, color, title, description }: ActivityItemProps) {
    return (
      <div className="flex">
        <div className="flex-shrink-0 mr-3">
          <div className={`p-2 rounded-full ${colorClasses[color]}`}>
            <i className={`fas ${icon}`}></i>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>
    )
  }