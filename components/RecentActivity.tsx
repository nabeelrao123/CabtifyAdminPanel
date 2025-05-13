import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUserPlus, 
  faShoppingCart, 
  faBoxOpen, 
  faComment 
} from '@fortawesome/free-solid-svg-icons'

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

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className={`p-2 rounded-full ${activity.color}`}>
                <FontAwesomeIcon icon={activity.icon} />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-[#353535]">{activity.title}</p>
              <p className="text-xs text-[#353535]">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity