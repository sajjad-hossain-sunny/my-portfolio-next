import { HamburgerIcon } from '@/app/core'
import { Sidebar_contents } from '@/statics/SideBar_Contents'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'

interface IProps {
  width?: number
}

const SideBar: FC<IProps> = ({ width }) => {
  const [open, setOpen] = useState(false)

  const handleHamburgerClick = () => {
    setOpen(!open)
  }

  return (
    <nav className='col-span-5 md:col-span-1'>
      <div className="fixed z-50 h-dvh bg-sideBarBg py-7 hidden md:flex flex-col items-center justify-between" style={{ width: `calc(100% - ${width}px)` }}>
        {/* Profile */}
        <div className="">
          <div className="h-180 w-180 bg-secondary-500 rounded-full grid place-items-center cursor-grab select-none mx-auto">
            <div className="w-166 h-166 rounded-full overflow-hidden">
              <Image className='w-full object-cover' src={Sidebar_contents.avatar} alt="avatar" width={180} height={180} />
            </div>
          </div>
          <h2 className="font-syne font-bold text-white text-xl capitalize tracking-wider mt-5 text-center">{Sidebar_contents.name}</h2>
        </div>
        {/* Nav Items */}
        <ul className="">
          {Sidebar_contents?.navItems?.map(({ id, navBtn, navRoute }) => (
            <li key={id} className="capitalize text-white text-base mt-3.5 py-0.5 text-center select-none duration-300 relative after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:bottom-0 after:bg-primary after:transition-all after:duration-500 after:ease-in-out after:scale-x-0 hover:after:scale-x-125 hover:text-primary">
              <Link className="" href={navRoute}>{navBtn}</Link>
            </li>
          ))}
        </ul>
        {/* Social Links */}
        <div className='flex'>
          {Sidebar_contents?.socialLinks?.map(({ id, socialName, socialUrl, socialIcon, bgColor }) => (
            <Link key={id} className="group w-7 h-7 bg-white rounded-full mx-1 duration-300 ease-out hover:w-[115px] overflow-hidden flex items-center" href={socialUrl}>
              <div className={clsx('text-base min-w-7 h-7 rounded-full duration-500 group-hover:rotate-[360deg] grid place-content-center group-hover:text-white', {
                'group-hover:bg-facebook': bgColor === '#1877F2',
                'group-hover:bg-github': bgColor === '#24292e',
                'group-hover:bg-linkedin': bgColor === '#0073AF',
                'group-hover:bg-whatsapp': bgColor === '#25D366',
                'group-hover:bg-instagram': bgColor === '#E15546',
              })}>
                {socialIcon}
              </div>
              <span className='text-sm font-medium ml-1 leading-7'>{socialName}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="fixed z-50 block md:hidden w-full bg-sideBarBg">
        <div className="py-4 container flex items-center justify-between">
          <h2 className="font-syne font-bold text-white text-lg capitalize">{Sidebar_contents.name}</h2>
          <HamburgerIcon onClick={handleHamburgerClick} open={open}></HamburgerIcon>
        </div>
      </div>
    </nav>
  )
}

export default SideBar
