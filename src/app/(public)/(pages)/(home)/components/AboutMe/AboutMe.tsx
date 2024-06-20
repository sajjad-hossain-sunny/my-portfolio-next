import React, { FC } from 'react'
import { AboutMe_Contents } from '@/statics/AboutMe_Contents'
import { Button, CompTitle, Container } from '@/app/core'

interface IProps { }

const AboutMe: FC<IProps> = () => {
  return (
    <section className='py-10 md:py-70'>
      <CompTitle title={AboutMe_Contents.title} sub_title={AboutMe_Contents.sub_title} />

      <Container>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 md:col-span-2">
            <h4 className="font-semibold text-2xl text-secondary-600">I&apos;m <span className='text-primary'>{AboutMe_Contents.information.name},</span> a {AboutMe_Contents.information.position}</h4>
            <p className="text-sm leading-5 md:leading-6 text-secondary-600 text-justify mt-5 mb-2">{AboutMe_Contents.description}</p>
            <p className="text-sm leading-5 md:leading-6 text-secondary-600 text-justify">{AboutMe_Contents.description2}</p>
          </div>
          <div className="col-span-3 md:col-span-1">
            <ul className="mb-10">
              <li className="mb-3 md:mb-5 font-semibold text-sm capitalize text-secondary-300 flex items-center">
                <span className="w-12">name</span>
                <span className="mr-1">:</span>
                <p className="font-normal text-secondary-200">{AboutMe_Contents.information.name}</p>
              </li>
              <li className="mb-3 md:mb-5 font-semibold text-sm text-secondary-300 flex items-center">
                <span className="w-12 capitalize">email</span>
                <span className="mr-1">:</span>
                <a href={`mailto:${AboutMe_Contents.information.email}`} className="font-normal text-primary w-5">{AboutMe_Contents.information.email}</a>
              </li>
              <li className="mb-3 md:mb-5 font-semibold text-sm capitalize text-secondary-300 flex items-center">
                <span className="w-12">age</span>
                <span className="mr-1">:</span>
                <p className="font-normal text-secondary-200">{AboutMe_Contents.information.age}</p>
              </li>
              <li className="mb-3 md:mb-5 font-semibold text-sm capitalize text-secondary-300 flex items-center">
                <span className="w-12">from</span>
                <span className="mr-1">:</span>
                <p className="font-normal text-secondary-200">{AboutMe_Contents.information.from}</p>
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