"use client";
import { Button } from '@/app/core';
import React, { FC } from 'react';
import { Banner_Contents } from '@/statics/Banner_Contents';
import { Typewriter } from 'react-simple-typewriter'

const Banner: FC = () => {
  return (
    <>
      <div className="bg-hero-pattern h-dvh bg-cover bg-no-repeat bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:bg-overlay before:w-full before:h-full grid place-content-center">
        <div className="relative z-10 text-white capitalize text-center px-2.5">
          <h2 className="text-xl md:text-28 leading-50 font-medium inline-block relative after:absolute after:bottom-0 after:right-0 after:translate-x-4 md:after:translate-x-6 after:-translate-y-[18px] md:after:-translate-y-4 after:w-3.5 md:after:w-5 after:h-0.5 after:bg-white mb-2 md:mb-14">hello</h2>
          <h1 className="text-4xl md:text-6xl leading-[55px] md:leading-[83px] font-semibold mb-4 text-center normal-case">
            I&apos;m <span className='text-primary'>
              <Typewriter
                words={Banner_Contents.heading}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h5 className="md:leading-9 text-base md:text-xl font-light mt-2 md:mt-10">based in {Banner_Contents.location}</h5>
          <Button className="mt-5" btnTitle='contact me' />
        </div>
      </div>
    </>
  )
}

export default Banner