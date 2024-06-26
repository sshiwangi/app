import React from 'react'

import { IoSend } from "react-icons/io5";

interface InputProps{
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Input({value, onChange, onClick}: InputProps) {
  
  return (
    <div className="flex flex-col items-center justify-center  h-screen" >
      <div className="mb-4 w-1/2">
        <div className=' flex border rounded border-gray-500'>
          <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-slate-800" onChange={onChange} value={value} id="username" type="text" placeholder="Enter your message"/>
          <button className="shadow appearance-none  text-white bg-slate-800 rounded	 font-bold py-3 px-3 " onClick={onClick}>
<IoSend/>
</button>
        </div>
      </div>
    </div>
  );
}