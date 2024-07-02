import { CompTitle } from '@/app/core'
import Link from 'next/link'
import React, { FC, useMemo, useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdAttachEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import { Tooltip } from 'antd';

const Footer: FC = () => {
  const [arrow, setArrow] = useState('Show');

  const socials = [
    {
      id: 1,
      title: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/sajjadsunny.dev",
    },
    {
      id: 2,
      title: "Github",
      icon: <FaGithub />,
      link: "https://github.com/sajjadsunny-dev",
    },
    {
      id: 3,
      title: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com/in/sajjad-hossain-sunny",
    },
    {
      id: 4,
      title: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/sajjadsunny.dev/",
    },
    {
      id: 5,
      title: "Twitter",
      icon: <FaXTwitter />,
      link: "#",
    },
    {
      id: 6,
      title: "Whatsapp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/qr/MJJI7ZQB6EWYF1",
    },
  ]

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }

    if (arrow === 'Show') {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <>
      <footer className=''>
        <div className="bg-componentBg pt-14 md:pt-73 pb-12 md:pb-67">
          <CompTitle title="contact" sub_title='get in touch' />
          <div className="container grid grid-cols-12 gap-x-5 gap-y-7">
            <div className="col-span-12 landscape:col-span-3 landscape:xl:col-span-3 portrait:md:col-span-3 lg:col-span-3">
              <h5 className="text-xl lg:text-2xl text-secondary-600 font-semibold uppercase mb-3 md:mb-4">address</h5>
              <p className="text-sm lg:text-base text-secondary-200">Mugda, Dhaka-1214,<br /> Bangladesh</p>
            </div>
            <div className="col-span-12 landscape:col-span-5 landscape:xl:col-span-6 portrait:md:col-span-5 lg:col-span-6">
              <h5 className="text-xl lg:text-2xl text-secondary-600 font-semibold uppercase mb-3 md:mb-4">contact me</h5>
              <div className="flex flex-col items-start">
                <Link
                  href="tel:+8801567963367"
                  className="text-sm lg:text-base text-secondary-200 mb-2.5 flex items-center"
                >
                  <MdCall className='text-lg md:text-22 text-primary mr-0.5 md:mr-1.5' />
                  +880-1567-963367
                </Link>
                <Link
                  href="tel:+8801902435624"
                  className="text-sm lg:text-base text-secondary-200 mb-2.5 flex items-center"
                >
                  <MdCall className='text-lg md:text-22 text-primary mr-0.5 md:mr-1.5' />
                  +880-1902-435624
                </Link>
                <Link
                  href="mailto:sajjadhossainsunny.dev@gmail.com"
                  className="text-sm lg:text-base text-secondary-200 mb-2.5 flex items-center break-words"
                >
                  <MdAttachEmail className='text-lg md:text-22 text-primary mr-0.5 md:mr-1.5' />
                  sajjadhossainsunny.dev@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-span-12 landscape:col-span-4 landscape:xl:col-span-3 portrait:md:col-span-4 lg:col-span-3">
              <h5 className="text-xl lg:text-2xl text-secondary-600 font-semibold uppercase mb-5 md:mb-4">follow me on</h5>
              <div className="grid grid-cols-5 xl:grid-cols-4 gap-6 ">
                {socials.map(({ id, title, icon, link }) => (
                  <div key={id} className="col-span-1 grid place-content-center">
                    <Tooltip placement="bottom" title={title} arrow={mergedArrow}>
                      <Link href={link} className='text-xl md:text-2xl text-secondary-600'>{icon}</Link>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs md:text-sm text-center py-5 text-secondary-600 capitalize">Copyright © 2024 <Link target={'_blank'} href={'https://linkedin.com/in/sajjad-hossain-sunny'} className='text-primary'>Sajjad hossain Sunny</Link>. All Rights Reserved.</div>
      </footer>
    </>
  )
}

export default Footer 