import Link from 'next/link'
import React, { FC } from 'react'

type Props = {}

const ButtonBorder: FC<Props> = () => {
  return (
    <div>
      <Link
        className='px-6 lg:px-8 py-2.5 lg:py-3 bg-transparent font-medium text-sm lg:text-base inline-block select-none duration-300 capitalize relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-2 before:border-solid before:border-black before:transition-all before:duration-300 before:ease-in after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-2 after:border-solid after:border-primary after:transition-all after:duration-300 after:ease-in after:scale-x-125 after:scale-y-150 after:opacity-0 hover:after:scale-x-100 hover:after:scale-y-100 hover:after:opacity-100 hover:before:opacity-0 hover:text-primary'
        href={'/skills'}
      >show all skills</Link>
    </div >
  )
}

export default ButtonBorder