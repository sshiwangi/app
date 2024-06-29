import Image from 'next/image'
import React, { ReactNode } from 'react'
import devlaunch from '../assets/devlaunch.png'
import { IoMdLogOut } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

interface SidebarProps {
  children: ReactNode;
}
export default function Sidebar({children}:SidebarProps ) {
  return (
    
    <div className="flex h-screen bg-gray-900">

     <div className=" flex-col justify-between w-28 bg-gray-800">
        
        
     
  

 
  <aside className="flex h-[calc(100vh_-_2rem)]  flex-col items-center justify-between  py-6">

        <span> <Image  className='rounded-3xl p-4' objectFit="cover"alt ='devlaunch'src={devlaunch}/></span> 
     <span> 
      
  <button>   <IoMdLogOut size ={44}color='white' className='  '/> </button> </span> 

        </aside>
        </div>
    <div className=" flex-1 p-4 relative">
              
        {children}
        
    </div>
    
</div>
  )
}


