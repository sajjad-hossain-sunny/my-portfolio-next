import React, { FC } from 'react'
import { AboutMe, Banner, Services } from '../../components'

const HomeWrapper: FC = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Services />
    </>
  )
}

export default HomeWrapper