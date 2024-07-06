import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface cardProps {
  icon: string | StaticImageData;
  title?: string;
  description?: string;
}
function Card({ icon, title, description }: cardProps) {
  return (
    <div className="bg-primary-dark-800 flex flex-col shadow-md rounded-xl justify-center text-center items-center gap-2 p-4 lg:max-w-[300px] ">
      <Image src={icon} alt={`${title ? 'title' : 'icon'}`} className="" />
      <h2 className="text-xl text-white font-bold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default Card;
