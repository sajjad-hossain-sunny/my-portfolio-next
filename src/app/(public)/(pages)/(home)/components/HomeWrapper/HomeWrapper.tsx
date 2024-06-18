import React, { FC } from 'react'
import { AboutMe, Banner, Services, Summary } from '../../components'

const HomeWrapper: FC = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Services />
      <Summary />
    </>
  )
}

export default HomeWrapper