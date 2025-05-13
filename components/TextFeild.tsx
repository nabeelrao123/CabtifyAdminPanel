'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store'
interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export default function TextField({
  label,
  className = '',
  ...props
}: TextFieldProps) {

      const color = useSelector((state: RootState) => state.color.color);
  return (
    <div>
      {label && (
        <label className=   
       {`${color === '#353535' ? 'text-white '  : 'text-gray-900'}    block mb-2 text-sm font-medium`}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={`block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
            bg-[#EFEFEF]
 text-xs focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      />
    </div>
  );
}