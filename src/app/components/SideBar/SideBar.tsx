import { HamburgerIcon } from '@/app/core'
import { Sidebar_contents } from '@/statics/SideBar_Contents'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, useState } from 'react'

interface IProps {
  width?: number
}

const SideBar: FC<IProps> = ({ width }) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const handleHamburgerClick = () => {
    setOpen(!open)
  }

  return (
    <nav className='col-span-5 md:col-span-1 relative'>
      <div className="fixed z-50 h-full overflow-y-auto bg-sideBarBg py-6 hidden md:portrait:hidden md:flex flex-col items-center justify-between px-1" style={{ width: `calc(100% - ${width}px)` }}>
        {/* Profile */}
        <div className="">
          <div className="h-[136px] w-[136px] lg:h-180 lg:w-180 bg-secondary-500 rounded-full grid place-items-center cursor-grab select-none mx-auto">
            <div className="w-32 h-32 lg:w-166 lg:h-166 rounded-full overflow-hidden">
              <Image className='w-full object-cover' src={Sidebar_contents.avatar} alt="avatar" width={180} height={180} />
            </div>
          </div>
          <h2 className="font-syne font-bold text-white text-lg lg:text-xl capitalize tracking-wider mt-5 text-center">{Sidebar_contents.name}</h2>
        </div>
        {/* Nav Items */}
        <ul className="">
          {Sidebar_contents?.navItems?.map(({ id, navBtn, navRoute }) => (
            <li key={id} className={`capitalize text-base my-3.5 py-0.5 text-center select-none duration-300 relative after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:bottom-0 after:bg-primary after:transition-all after:duration-500 after:ease-in-out hover:after:scale-x-125 hover:text-primary cursor-pointer ${navRoute === pathname ? "after:scale-x-125 text-primary" : "text-white after:scale-x-0"}`}>
              <Link className="" href={navRoute}>{navBtn}</Link>
            </li>
          ))}
        </ul>
        {/* Social Links */}
        <div className='flex mt-2'>
          {Sidebar_contents?.socialLinks?.map(({ id, socialName, socialUrl, socialIcon, bgColor }) => (
            <Link key={id} className="group w-6 lg:w-7 h-6 lg:h-7 bg-white rounded-full mx-0.5 lg:mx-1 duration-300 ease-out hover:w-[100px] overflow-hidden flex items-center" href={socialUrl}>
              <div className={clsx('text-base min-w-6 lg:min-w-7 h-6 lg:h-7 rounded-full duration-500 group-hover:rotate-[360deg] grid place-content-center group-hover:text-white', {
                'group-hover:bg-facebook': bgColor === '#1877F2',
                'group-hover:bg-github': bgColor === '#24292e',
                'group-hover:bg-linkedin': bgColor === '#0073AF',
                'group-hover:bg-whatsapp': bgColor === '#25D366',
                'group-hover:bg-instagram': bgColor === '#E15546',
              })}>
                {socialIcon}
              </div>
              <span className='text-xs font-medium ml-1 leading-7'>{socialName}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="fixed z-50 block portrait:block md:hidden w-full ">
        <div className="container flex items-center justify-between py-3 md:portrait:py-5 relative z-50 bg-sideBarBg">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-secondary-500 rounded-full grid place-items-center cursor-grab select-none mr-2">
              <div className="w-9 h-9 lg:w-166 lg:h-166 rounded-full overflow-hidden">
                <Image className='w-full object-cover' src={Sidebar_contents.avatar} alt="avatar" width={180} height={180} />
              </div>
            </div>
            <h2 className="font-syne font-bold text-white text-lg md:text-2xl capitalize">{Sidebar_contents.name}</h2>
            <div className='flex ml-5 portrait:hidden md:portrait:flex'>
              {Sidebar_contents?.socialLinks?.map(({ id, socialName, socialUrl, socialIcon, bgColor }) => (
                <Link key={id} className="group w-7 h-7 bg-white rounded-full mx-1 duration-300 ease-out hover:w-[100px] overflow-hidden flex items-center" href={socialUrl}>
                  <div className={clsx('text-base min-w-7 h-7 rounded-full duration-500 group-hover:rotate-[360deg] grid place-content-center group-hover:text-white', {
                    'group-hover:bg-facebook': bgColor === '#1877F2',
                    'group-hover:bg-github': bgColor === '#24292e',
                    'group-hover:bg-linkedin': bgColor === '#0073AF',
                    'group-hover:bg-whatsapp': bgColor === '#25D366',
                    'group-hover:bg-instagram': bgColor === '#E15546',
                  })}>
                    {socialIcon}
                  </div>
                  <span className='text-xs font-medium ml-1 leading-7'>{socialName}</span>
                </Link>
              ))}
            </div>
          </div>
          <HamburgerIcon onClick={handleHamburgerClick} open={open}></HamburgerIcon>
        </div>
        <div className="relative z-30">
          <ul className={`w-full bg-glass pt-2 pb-3.5 px-24 border-b-[1px] border-glass absolute top-0 left-0 duration-500 backdrop-blur-sm ${open ? "translate-y-0" : "-translate-y-full"}`}>
            {Sidebar_contents?.navItems?.map(({ id, navBtn, navRoute }) => (
              <li key={id} className={`capitalize text-base mt-1 py-1.5 text-center select-none duration-300 hover:text-primary cursor-pointer relative after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:bottom-0 after:bg-primary after:transition-all after:duration-500 after:ease-in-out hover:after:scale-x-100 ${navRoute === pathname ? "after:scale-x-100 text-primary" : "text-white after:scale-x-0"}`}>
                <Link className="" onClick={() => setOpen(false)} href={navRoute}>{navBtn}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SideBar
