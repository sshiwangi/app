import Image from 'next/image';
import React, { ReactNode } from 'react';
import devlaunch from '../assets/devlaunch.png';
import { IoMdLogOut } from 'react-icons/io';
import linkedin from '../assets/LinkedIn.png';
interface SidebarProps {
  children: ReactNode;
}
export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className="flex h-screen bg-gray-900">
      <div className=" flex-col justify-between  bg-gray-800">
        <aside className="  flex h-[calc(90vh_-_2rem)]  flex-col items-center justify-between  py-6">
          <span>
            <Image
              className="h-28 w-28 mt-8 rounded-3xl p-4"
              objectFit="cover"
              alt="devlaunch"
              src={devlaunch}
            />
          </span>
        </aside>
        <div className="flex  flex-col    items-center justify-between ">
          <button>
            <IoMdLogOut size={44} color="white" className="mb-4" />
          </button>{' '}
          <span>
            <Image
              className=" h-8 w-8 rounded-full mb-4 ring-2 ring-white"
              src={linkedin}
              alt="profile"
            />
          </span>
        </div>
      </div>
      <div className=" flex-1 p-4 relative">{children}</div>
    </div>
  );
}
