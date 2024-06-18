import { Button } from '@/app/core';
import React, { FC } from 'react';

const Banner: FC = () => {
  return (
    <>
      <div className="bg-hero-pattern h-dvh bg-cover bg-no-repeat bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:bg-overlay before:w-full before:h-full grid place-content-center">
        <div className="relative z-10 text-white capitalize ">
          <h2 className="text-28 leading-50 font-medium inline-block relative after:absolute after:bottom-0 after:right-0 after:translate-x-6 after:-translate-y-4 after:w-5 after:h-0.5 after:bg-white !text-start">hello</h2>
          <div className="text-center">
            <h1 className="text-6xl leading-83 font-semibold mb-4 text-center">I&apos;m <span className="text-primary">sajjad hossain sunny.</span></h1>
            <h5 className="leading-9 text-xl font-light">based in Dhaka, Bangladesh.</h5>
            <Button className="mt-5" btnTitle='contact me' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner