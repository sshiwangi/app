'use client';

import Image from 'next/image';
import devlaunch from '../../assets/devlaunch.png';
import googleIcon from '../../assets/icons8-google-48 (1) 1.png';
import githubIcon from '../../assets/icons8-github-60 (1) 1.png';

function Auth() {
  return (
    <>
      <section className="bg-primary-dark-900 flex text-white h-screen items-center justify-center">
        <div className="bg-gradient-to-r w-1/2 h-1/2 py-10 rounded-xl shadow-md flex flex-col gap-8 items-center ">
          <div className="flex flex-col gap-2 items-center">
            <Image
              className="h-12 w-12 rounded-xl"
              objectFit="cover"
              alt="devlaunch"
              src={devlaunch}
            />
            DevLaunch
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex py-2 px-4 bg-primary-dark-800 gap-2 items-center rounded-xl">
              <Image className="h-8 w-8" alt="google" src={googleIcon} />
              Sign up with Google
            </div>
            <div className="flex   py-2 px-4 bg-primary-dark-800 gap-2 items-center rounded-xl">
              <Image className="h-8 w-8" alt="google" src={githubIcon} />
              Sign up with GitHub
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auth;
