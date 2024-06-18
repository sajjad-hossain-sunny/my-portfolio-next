import { CompTitle, Container } from '@/app/core'
import React, { FC } from 'react'
import { Services_Contents } from '@/statics/Services_Contents'
import Image from 'next/image'

type Props = {}

const Services: FC<Props> = () => {
  return (
    <>
      <div className="py-70">
        <CompTitle title={Services_Contents.title} sub_title={Services_Contents.sub_title} />
        <Container>
          <div className="grid grid-cols-2 gap-x-5 gap-y-50">
            {Services_Contents.serviceCards.map(({ id, serviceName, serviceDetailes, serviceIcon }) => (
            <div key={id} className="col-span-1 group rounded-xl shadow-lg py-5 px-4 overflow-hidden cursor-pointer relative before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 before:bg-primary before:w-3 before:h-20 before:rounded-s-lg before:duration-500 hover:before:w-full hover:before:h-full hover:shadow-xl">
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
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Services