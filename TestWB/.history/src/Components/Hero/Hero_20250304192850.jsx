import React from 'react'
import { MainCompo } from '../MainCompo/MainCompo'
import heroImage from '../../Images/hero-bg.png'
export const Hero = () => {
  return (
   <MainCompo >
   <div className='h-[60vh] w-[100vw]'  style={{
          backgroundImage:`url(${heroImage})`

        }}>

   </div>
   </MainCompo>
  )
}
