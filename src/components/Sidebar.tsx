import Image from 'next/image'
import React, { ReactNode } from 'react'
import devlaunch from '../assets/devlaunch.png'
import { IoMdLogOut } from "react-icons/io";
import Input from './Input';

interface SidebarProps {
  children: ReactNode;
}
export default function Sidebar({children}:SidebarProps ) {
  return (
    <div className="flex h-screen bg-gray-900">

    <div className="hidden md:flex flex-col w-24 bg-gray-800">
        <div className=''>
        
       <Image  className='rounded-3xl p-4' objectFit="cover"alt ='devlaunch'src={devlaunch}/>
       <IoMdLogOut size ={34}color='white' className='ml-7'/>
        </div>
     
    </div>


    <div className=" flex-1 ">
      
        <div className="p-4 ">
           
        {children}
        
        </div>
    </div>
    
</div>
  )
}


