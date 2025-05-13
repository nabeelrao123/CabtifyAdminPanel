// import Sidebar from '../components/Sidebar'
// import Header from '../components/Header'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function Home() {
    return (
        <>
            {/* <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header /> */}
                <div className="flex flex-col flex-1 overflow-hidden">
                    <main className="flex-1 overflow-auto p-4 bg-light">
                        <div className="grid grid-cols-1 mb-6">
                             <div className="bg-white rounded-lg border border-gray-300 lg:col-span-2">
                                <div className="bg-[#353535] p-4 rounded-lg">
                                    <h3 className="text-lg text-center font-medium text-[#00A699]">Add Country</h3>
                                </div>

                                <div className="p-4 ">
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6 ' >
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Small input
                                            </label>
                                            <input
                                                type="text"
                                                id="small-input"
                                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Small input
                                            </label>
                                            <input
                                                type="text"
                                                id="small-input"
                                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>


                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Small input
                                            </label>
                                            <input
                                                type="text"
                                                id="small-input"
                                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>


                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Small input
                                            </label>
                                            <input
                                                type="text"
                                                id="small-input"
                                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className='flex justify-center'  >
                                        <button
                                            type="submit"
                                            className="px-10 py-2   bg-[#00A699] text-white rounded-lg hover:bg-blue-700 transition"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            {/* </div> */}
        </>
    )
}