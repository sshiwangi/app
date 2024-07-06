import Image from 'next/image';
import devlaunch from '../assets/devlaunch.png';

function Navbar() {
  return (
    <nav className="flex items-center bg-primary-dark-900 justify-between px-4 py-4 ">
      <a href="/" className="flex gap-2 items-center">
        <Image
          className="h-8 w-8 rounded-lg"
          objectFit="cover"
          alt="devlaunch"
          src={devlaunch}
        />
        <h2 className="text-white font-medium text-lg">DevLaunch</h2>
      </a>
      <div className="border border-white rounded-xl  text-white p-2">
        <a href="/auth"> Get Started</a>
      </div>
    </nav>
  );
}

export default Navbar;
