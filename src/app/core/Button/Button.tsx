import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  btnTitle?: string,
  href?: string,
  target?: string,
  className?: string
}

const Button: FC<Props> = ({ btnTitle, href, className, target }) => {
  return (
    <Link
      className={`${className} customBtn px-6 py-2 bg-primary text-white font-medium text-sm md:text-base rounded-[100px] border-0 inline-block touch-manipulation select-none duration-300 hover:scale-105 hover:rotate-2`}
      href={href || '#'}
      target={target}
      shallow
    >
      {btnTitle}
    </Link>
  )
}

export default Button