import Image from 'next/image';
import devlaunch from '../assets/devlaunch.png';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 ">
      <div className="flex gap-2 items-center">
        <Image
          className="h-8 w-8 rounded-lg"
          objectFit="cover"
          alt="devlaunch"
          src={devlaunch}
        />
        <h2 className="text-white font-medium text-lg">DevLaunch</h2>
      </div>
      <div className="border border-white rounded-xl  text-white p-2">
        Get Started
      </div>
    </nav>
  );
}

export default Navbar;
