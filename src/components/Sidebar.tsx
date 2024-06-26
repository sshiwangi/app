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

    <div className="flex flex-col w-28 bg-gray-800">
        
        
       <Image  className='rounded-3xl p-4' objectFit="cover"alt ='devlaunch'src={devlaunch}/>
       <IoMdLogOut size ={44}color='white' className='ml-7'/>
  
    </div>


    <div className=" flex-1 p-4 relative">
              
        {children}
        
    </div>
    
</div>
  )
}


