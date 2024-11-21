"use client";
import React, { FC, useEffect, useState } from 'react'
import { AboutMe_Contents } from '@/statics/AboutMe_Contents'
import { Button, CompTitle, Container } from '@/app/core'
import Link from 'next/link'

interface IProps { }

const AboutMe: FC<IProps> = () => {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const calculateAge = (birthDateString: string) => {
      const birthDate = new Date(birthDateString);
      
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      } else {
        age ++
      }

      return age;
    };

    const myBirthDate = AboutMe_Contents.information.dateOfBirth;
    setAge(calculateAge(myBirthDate));
  }, []);

  return (
    <section className='pt-14 md:pt-73 pb-12 md:pb-67'>
      <CompTitle title={AboutMe_Contents.title} sub_title={AboutMe_Contents.sub_title} />

      <Container>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 md:col-span-2">
            <h4 className="font-semibold text-2xl text-secondary-600">I&apos;m <span className='text-primary'>{AboutMe_Contents.information.name},</span> a {AboutMe_Contents.information.position}</h4>
            <p className="text-sm leading-5 md:leading-6 text-secondary-600 dark:text-white/50 text-justify mt-5 mb-2">{AboutMe_Contents.description}</p>
            <p className="text-sm leading-5 md:leading-6 text-secondary-600 dark:text-white/50 text-justify">{AboutMe_Contents.description2}</p>
          </div>
          <div className="col-span-3 md:col-span-1">
            <ul className="mb-10 mt-2">
              <li className="mb-3 md:mb-5 font-semibold text-sm capitalize text-secondary-300 flex items-center">
                <span className="w-12 text-secondary-600 opacity-90 dark:opacity-70">name</span>
                <span className="mr-1">:</span>
                <p className="font-normal text-secondary-200 dark:text-white/50">{AboutMe_Contents.information.name}</p>
              </li>
              <li className="mb-3 md:mb-5 font-semibold text-sm text-secondary-300 flex items-start">
                <span className="w-12 capitalize text-secondary-600 opacity-90 dark:opacity-70">email</span>
                <span className="mr-1">:</span>
                <Link href={`mailto:${AboutMe_Contents.information.email}`} className="font-normal text-primary w-3/4 landscape:lg:w-3/4 landscape:xl:w-auto lg:w-auto break-words">
                  {AboutMe_Contents.information.email}
                </Link>
              </li>
              <li className="mb-3 md:mb-5 font-semibold text-sm capitalize text-secondary-300 flex items-center">
                <span className="w-12 text-secondary-600 opacity-90 dark:opacity-70">age</span>
                <span className="mr-1">:</span>
                <p className="font-normal text-secondary-200 dark:text-white/50">{age}</p>
              </li>
              <li className="mb-3 md:mb-5 font-semibold text-sm capitalize text-secondary-300 flex items-center">
                <span className="w-12 text-secondary-600 opacity-90 dark:opacity-70">from</span>
                <span className="mr-1">:</span>
                <p className="font-normal text-secondary-200 dark:text-white/50">{AboutMe_Contents.information.from}</p>
              </li>
            </ul>
            <Button btnTitle="Download CV" className="" href={AboutMe_Contents.information.CV_download} />
          </div>
        </div>
      </Container>

    </section>
  )
}

export default AboutMe