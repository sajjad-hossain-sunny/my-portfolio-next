import { CompTitle, Container, ServicesCard } from '@/app/core'
import React, { FC } from 'react'
import { Services_Contents } from '@/statics/Services_Contents'

type Props = {}

const Services: FC<Props> = () => {
  return (
    <>
      <section className="py-70">
        <CompTitle title={Services_Contents.title} sub_title={Services_Contents.sub_title} />
        <Container>
          <div className="grid grid-cols-2 gap-x-5 gap-y-50">
            {Services_Contents.serviceCards.map(({ id, serviceName, serviceDetailes, serviceIcon }) => (
              <ServicesCard key={id} serviceIcon={serviceIcon} serviceName={serviceName} serviceDetailes={serviceDetailes} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Services