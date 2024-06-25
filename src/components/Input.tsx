import React from 'react'

export default function Input() {
  return (
    <div className="flex flex-col h-screen justify-end">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Input
        </label>
        <div className='border rounded border-gray-500'>
          <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
      </div>
    </div>
  );
}