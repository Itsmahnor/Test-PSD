import React from 'react'
import { MainCompo } from '../MainCompo/MainCompo'
import heroImage from '../../Images/hero-bg.png'
export const Hero = () => {
  return (
 
   <div className='lg:h-[80vh] h-auto w-[100vw] opacity-75 bg-green-700 lg:p-40'  style={{
          backgroundImage:`url(${heroImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
<MainCompo>
  <div className='w-[100%]  bg-purple-700 '>
    <div className='w-50 bg-green-500'>
GET READY FOR NEW ADIDAS BRANDS
    </div>
    <div>

    </div>
  </div>
</MainCompo>
   </div>
  
  )
}
