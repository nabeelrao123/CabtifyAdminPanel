"use client"
import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { FaEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store'
interface Column {
    header: string;
    accessor: string;
    render?: (value: any) => React.ReactNode;
}

interface DataTableProps {
    columns: Column[];
    data: any[];
    itemsPerPageOptions?: number[];
    itemsPerPage: any
}

export default function DataTable({
    columns,
    data,
    itemsPerPage,
}: DataTableProps) {
    const [currentPage, setCurrentPage] = useState(0);
      const color = useSelector((state: RootState) => state.color.color);
    const handlePageChange = (page: number) => setCurrentPage(page)

    const final = useMemo(() => {
        const arr = [] as any
        let status = 0
        for (let i = 0; i < data.length / itemsPerPage; i++) {
            arr[i] = []
            for (let j = status; j < data.length; j++) {
                if (arr[i].length == itemsPerPage) {
                    status = j
                    break
                }
                arr[i].push(data[j]);
            }
        }
        return arr
    }, [itemsPerPage,data])

    
    return (
        <div className="flex flex-col space-y-4">
            <div className="overflow-x-auto shadow-md sm:rounded-t-lg">
                <table className=
                {`${color === '#353535' ? 'bg-[#353535] '  : 'bg-white'}  w-full text-sm text-left  text-${color === '#353535' ? 'white' : 'red-500'} `}>
                    <thead className="text-xs text-[#353535]  bg-[#D4D4D4]">
                        <tr>
                            {columns.map((column) => (
                                <th key={column.accessor} scope="col" className="px-6 py-3">
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                         {final.length > 0 && final[currentPage]?.length > 0 ? (
                            final[currentPage].map((cval: any) => (
                                <tr key={cval.id}>
                                    <td className="px-6 py-4">{cval.id}</td>
                                    <td className="px-6 py-4">{cval.name}</td>
                                    <td className="px-6 py-4">{cval.vehicleType}</td>
                                    <td className="px-6 py-4">{cval.vehicleType}</td>
                                 
                                    <td className="px-6 py-4"><Button>
                                        Active
                                        </Button></td>
                                        <td className="px-6 py-4">
                                       <FaEdit  className="text-[#00A699]" size={20}  />
                                    </td>
       
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td colSpan={columns.length} className="px-6 py-4 text-center">
                                    No data found
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
                <div className="flex flex-col sm:flex-row items-center
                 bg-[#353535] justify-between gap-4 px-4 ">


                    {final.length > 0 ? (<>

                        <div className="text-sm text-white font-normal  px-3 " >
                            Showing <span className="font-normal">{currentPage + 1}</span> to{' '}
                            <span className="font-normal">
                                {final[currentPage]?.length}
                            </span>{' '}
                            of <span className="font-medium">{data.length > 0 ? data.length : ''}</span> results
                        </div>
                        <div className="flex gap-1">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 0}
                                className="px-3 bg-[#00A699] font-bold text-white py-1"
                            >
                                ‹
                            </button>

                            {final?.map((cval: any, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index)}
                                    className={`px-1 py-1 mx-1 rounded-md transition-colors
                            ${currentPage === index
                                            ? ' text-white font-bold'
                                            : 'text-gray-300  hover:text-white'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === final.length - 1}
                                className="px-3 bg-[#00A699] font-bold text-white py-1"

                            >
                                ›
                            </button>
                        </div>
                    </>) : (<></>)}
                </div>
            </div>
        </div>
    );
}