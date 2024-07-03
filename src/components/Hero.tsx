import Image from 'next/image';
import gigImg from '../assets/Gig Generated for figma Manual 1 (1).png';

function Hero() {
  return (
    <div className="py-20 relative">
      {/* <div className=" h-[380px] w-[380px] rounded-full absolute right-0 top-10 bg-custom-radial-gradient backdrop-blur-600 opacity-[2%]"></div> */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-white md:text-5xl md:max-w-[600px] lg:max-w-[700px] lg:text-6xl text-center font-bold">
          Create Your Perfect Freelance{' '}
          <span className="text-secondary-dark">Gig</span> with AI
        </h1>
        <p className="text-gray-100 lg:max-w-[600px] text-center text-md">
          Choose your freelance platform, and let our AI craft a captivating gig
          description based on your unique skills.
        </p>
        <button className="bg-custom-gradient rounded-xl text-white font-medium py-2 px-4">
          Get Started
        </button>
      </div>
      {/* <div className="h-100 w-100 rounded-full absolute left-0 bg-custom-radial-gradient"></div> */}
      <Image src={gigImg} alt="gig-Img" className="" />
    </div>
  );
}

export default Hero;
