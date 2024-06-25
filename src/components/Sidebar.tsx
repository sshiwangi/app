import Image from 'next/image'
import React from 'react'
import devlaunch from '../assets/devlaunch.png'
import { IoMdLogOut } from "react-icons/io";
import Input from './Input';


export default function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-900">

    <div className="hidden md:flex flex-col w-24 bg-gray-800">
        <div className=''>
        
       <Image  className='rounded-3xl p-4' objectFit="cover"alt ='devlaunch'src={devlaunch}/>
       <IoMdLogOut size ={34}color='white' className='ml-7'/>
        </div>
     
    </div>


    <div className="flex flex-col flex-1 overflow-y-auto">
      
        <div className="p-4 ">
            <h1 className="text-2xl text-white font-bold">Welcome to my dashboard!</h1>
            <Input/>
        
        </div>
    </div>
    
</div>
  )
}


