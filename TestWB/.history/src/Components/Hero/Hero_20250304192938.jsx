import React from 'react'
import { MainCompo } from '../MainCompo/MainCompo'
import heroImage from '../../Images/hero-bg.png'
export const Hero = () => {
  return (
 
   <div className='h-[60vh] w-[100vw] opacity-0'  style={{
          backgroundImage:`url(${heroImage})`

        }}>

   </div>
  
  )
}
