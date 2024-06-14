import { Sidebar_contents } from '@/statics/SideBar_Contents'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaGithub } from "react-icons/fa";

interface IProps {
  width?: number
}

const SideBar: FC<IProps> = ({ width }) => {
  return (
    <>
      <nav className='col-span-1'>
        <div className="fixed h-dvh bg-sideBarBg py-7 flex flex-col items-center justify-between" style={{ width: `calc(100% - ${width}px)` }}>
          {/* profile */}
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
            {
              Sidebar_contents?.navItems?.map(({ id, navBtn, navRoute }) => (
                <li key={id} className="capitalize text-white text-base mt-3.5 py-0.5 text-center select-none duration-300 relative after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:bottom-0 after:bg-primary after:transition-all after:duration-500 after:ease-in-out after:scale-x-0 hover:after:scale-x-125 hover:text-primary"><Link className="" href={navRoute}>{navBtn}</Link></li>
              ))
            }
          </ul>
          {/* Social Links */}
          <div className='flex'>
            {
              Sidebar_contents?.socialLinks?.map(({ id, socialName, socialUrl, socialIcon, bgColor }) => (
                <Link key={id} className="group w-7 h-7 bg-white rounded-full mx-1 duration-300 ease-out hover:w-[115px] overflow-hidden flex items-center" href={socialUrl}>
                  <div className={`text-base min-w-7 h-7 rounded-full duration-500 group-hover:rotate-[360deg] group-hover:bg-[${bgColor}] bg-center bg-cover group-hover:text-white grid place-content-center`}>{socialIcon}</div>
                  <span className='text-sm font-medium ml-1 leading-7'>{socialName}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default SideBar