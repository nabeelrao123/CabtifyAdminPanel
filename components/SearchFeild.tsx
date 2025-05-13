import Image from 'next/image'
import img from '../assets/image.png'


const SearchFeild = () => {
  return (
    <div className="relative w-full sm:w-auto">
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="text"
      className="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search"
    // value={searchTerm}
    // onChange={(e) => {
    //     setSearchTerm(e.target.value);
    //     setCurrentPage(1);
    // }}
    />
  </div>
  )
}

export default SearchFeild