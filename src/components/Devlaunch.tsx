import React from 'react'
import Image from 'next/image'
import devlaunch from '../assets/devlaunch.png'

export default function DevLaunch() {
  return (

    
<>
<div className='flex justify-center  items-center'>

    <Image  className=' h-28 w-28 mt-8 bg-red-400 rounded-3xl' objectFit="cover"alt ='devlaunch'src={devlaunch}/>

    </div>
     <div className="mx-auto mt-8  bg-gray-700	rounded-lg max-w-xl lg:text-center">

        <p className="mt-6text-4xl text-white  leading-8  p-4">Describe  the service you want to provide
Things to mention, your years of experience, the tools you use, and the unique features</p>
   
    
  </div>
  </>
  
  )
}
