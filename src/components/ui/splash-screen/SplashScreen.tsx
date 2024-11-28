import React from 'react'
import { Icons } from '../icons'

const SplashScreen = () => {
  return (
      <div className="fixed top-0 left-0 w-full h-dvh flex items-center justify-center">
        <span className='text-3xl text-secondary-600 spin-icon'><Icons.FavIcon className='w-16 sm:w-20 lg:w-28' /></span>
      </div>
  )
}

export default SplashScreen