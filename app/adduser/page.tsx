"use client"

import Header from '@/components/Header'
import TextField from '@/components/TextFeild'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store'
export default function Home() {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [val, setVal] = useState('')
    const handleChange = (field: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('okooko', e.target.value)

        setState(prev => ({
            ...prev,
            [field]: e.target.value
        }))
        console.log('okooko', e.target.value)
    }

    const fields = [
        {
            label: 'Username',
            value: state.username,
            onChange: handleChange('username'),
            type: 'text'
        },
        {
            label: 'Email',
            value: state.email,
            onChange: handleChange('email'),
            type: 'email'
        },
        {
            label: 'Password',
            value: state.password,
            onChange: handleChange('password'),
            type: 'password'
        },
        {
            label: 'Confirm Password',
            value: state.confirmPassword,
            onChange: handleChange('confirmPassword'),
            type: 'password'
        }
    ]
    const handleSubmit = (e: any) => {
        alert('form submitted')

        e.preventDefault();
    }
    const color = useSelector((state: RootState) => state.color.color);


    return (
        <>
            <div className="flex flex-col flex-1 overflow-hidden">
                <main className={`${color === '#353535' ? 'bg-[#353535] '  : 'bg-ligth'}  
  
                flex-1 overflow-auto p-4 bg-light`}>
                    <div className=" block  md:flex gap-x-3 mb-6">

                        <div className=" w-[100%] md:w-[30%]">
                            <div className="bg-white rounded-lg border border-gray-300 h-[400px]  lg:col-span-2">
                                <div className="bg-[#353535] p-4 rounded-lg">
                                    <h3 className="text-lg text-center font-medium text-[#00A699]">Add User</h3>
                                </div>
                                <div className='flex flex-col items-center justify-center border p-4 gap-y-3'>
                                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                        {/* image */}
                                    </div>
                                    <div className='text-sm font-medium text-[#353535]'>
                                        <p>User Profile</p>
                                    </div>
                                    <div className='rounded-lg p-4 bg-[#EFEFEF]' >
                                        <h3 className="text-sm text-center font-medium text-[#353535]">status</h3>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mt-4 ' >
                                            {['active', 'inactive', 'pending', 'banned'].map((cval) => {
                                                return (<>
                                                    <div className="flex items-center mb-4">
                                                        <input id="default-radio-1" type="radio" value={cval}
                                                            checked={cval == val}
                                                            onChange={(e: any) => setVal(e.target.value)}
                                                            name={cval} className="w-4 h-4 text-blue-600
                                                 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
                                                  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{cval}</label>
                                                    </div>

                                                </>)
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-[100%] md:w-[70%]'>
                            <div className={`${color === '#353535' ? 'bg-[#353535] '  : 'bg-white'}
                            
                            
                            rounded-lg border h-[400px] border-gray-300 lg:col-span-2`}>
                                <div className="bg-[#353535] p-4 rounded-lg">
                                    <h3 className="text-lg text-center font-medium text-[#00A699]">Add User Information</h3>
                                </div>

                                <form onSubmit={handleSubmit} >
                                    <div className="p-4 ">

                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6 ' >
                                            {fields.map((field, index) => (
                                                <div key={index}>
                                                    <TextField
                                                        label={field.label}
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        type={field.type}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className='flex justify-center'  >
                                            <Button type='submit' size={'sm'} className='px-10 py-2 bg-[#00A699] text-white rounded-lg hover:bg-blue-700 transition ' >
                                                Submit
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {/* </div> */}
        </>
    )
}