import React from 'react'
import { MainCompo } from '../MainCompo/MainCompo'
import heroImage from '../../Images/hero-bg.png'
export const Hero = () => {
  return (
 
   <div className='h-[60vh] w-[100vw] opacity-75 bg-green-700'  style={{
          backgroundImage:`url(${heroImage})` }}>
<MainCompo>
  <div className='w-100'>
    <div className='w-50 bg-green-500'>

    </div>
  </div>
</MainCompo>
   </div>
  
  )
}
