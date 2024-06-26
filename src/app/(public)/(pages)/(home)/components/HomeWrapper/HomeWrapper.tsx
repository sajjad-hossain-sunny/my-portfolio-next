import React, { FC } from 'react'
import { AboutMe, Banner, Portfolio, Services, Summary } from '../../components'

const HomeWrapper: FC = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Services />
      <Summary />
      <Portfolio />
    </>
  )
}

export default HomeWrapper