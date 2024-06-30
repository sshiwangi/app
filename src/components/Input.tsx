import React from 'react';

import { IoSend } from 'react-icons/io5';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Input({ value, onChange, onClick }: InputProps) {
  return (
    <div className="absolute p-12 bottom-4 w-full justify-center flex left-0">
      <div className=" w-2/4">
        <div className=" flex  border-gray-500">
          <input
            className="shadow  border text-white rounded w-full py-3 px-3  bg-slate-800"
            onChange={onChange}
            value={value}
            id="username"
            type="text"
            placeholder="Enter your message"
          />
          <button
            className=" text-white bg-slate-800 border	 font-bold py-3 px-3 "
            onClick={onClick}
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}
