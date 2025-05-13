// import Header from '@/components/Header'
// // import { Textarea } from '@/components/ui/textarea'
// export default function Textarea() {
//     return (
//         <div>
//             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                 Small input
//             </label>
//              <input
//                 type="text"
//                 id="small-input"
//                 className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             />
//         </div>
//     )
// }

import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export default function TextField({
  label,
  className = '',
  ...props
}: TextFieldProps) {
  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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