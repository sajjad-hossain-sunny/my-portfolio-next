import Image from 'next/image'
import React, { FC } from 'react'

type Props = {
  serviceIcon: string,
  serviceName: string,
  serviceDetailes: string
}

const ServicesCard: FC<Props> = ({ serviceIcon, serviceName, serviceDetailes }) => {
  return (
    <div className="col-span-1 group rounded-xl shadow-lg py-5 px-4 overflow-hidden cursor-pointer relative before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 before:bg-primary before:w-3 before:h-20 before:rounded-s-lg before:duration-500 hover:before:w-full hover:before:h-full hover:shadow-xl">
      <div className="relative z-20 flex items-start gap-4">
        <div className="w-16 h-16 rounded-md overflow-hidden shadow-serviceShadow">
          <Image src={serviceIcon} alt="serviceIcon" width={100} height={100} />
        </div>
        <div className="w-[385px]">
          <h3 className="text-secondary-600 font-semibold text-xl capitalize duration-500 group-hover:text-white group-hover:drop-shadow-xl">{serviceName}</h3>
          <p className="mt-2.5 text-secondary-200 leading-6 text-sm justify duration-500 group-hover:text-white">{serviceDetailes}</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard