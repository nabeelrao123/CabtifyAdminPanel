'use client'
import DataTable from '@/components/Datatable'
import SearchFeild from '@/components/SearchFeild';
import ShowEntries from '@/components/ShowEntries';
import { useGetPostsQuery } from '../redux/apiSlice';
import { useEffect, useMemo, useState } from 'react';

export default function WalletTopUpRequest() {
  const columns = [
    {
      header: 'S.No',
      accessor: 'name',
    },
    {
      header: 'User Name',
      accessor: 'name',
    },
    {
      header: 'User Type',
      accessor: 'licenseNumber',
    },
    {
      header: 'Amount',
      accessor: 'vehicleType',
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (value: string) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${value === 'Active'
            ? 'bg-green-500 bg-opacity-20 text-green-500'
            : 'bg-gray-500 bg-opacity-20 text-gray-500'
            }`}
        >
          {value}
        </span>
      ),
    },

    {
      header: 'Actions',
      accessor: 'id',
      render: (value: number) => (
        <button className="text-blue-500 hover:text-blue-700 mr-2">
          Edit
        </button>
      ),
    },
  ];
  const drivers = [
    {
      id: 1,
      name: 'John Smith',
      licenseNumber: 'DL12345678',
      vehicleType: 'Sedan',
      status: 'Active',
      contact: 'john.smith@example.com',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      licenseNumber: 'DL87654321',
      vehicleType: 'SUV',
      status: 'Inactive',
      contact: 'sarah.j@example.com',
    },
  ];
 
  for (let i = 3; i <= 31; i++) {
    drivers.push({
      id: i,
      name: 'Michael Brown',
      licenseNumber: 'DL11223344',
      vehicleType: 'Truck',
      status: 'Active',
      contact: 'michael.b@example.com',
    });
  }
  
  const { data, error, isLoading } = useGetPostsQuery();
  const itemsPerPageOptions = [10, 15, 20, 25];
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const handleChange = (e: any) => setItemsPerPage(e.target.value)
  return (
    <>
      <div className='flex justify-between items-center mb-3' >
        <div>
          <ShowEntries
            itemsPerPageOptions={itemsPerPageOptions}
            itemsPerPage={itemsPerPage}
            handleChange={handleChange}
          />
        </div>
        <div>
          <SearchFeild />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={drivers}
        itemsPerPage={itemsPerPage}
      />
      {/* </main>
      </div> */}
    </>
  )
}
