import React from 'react'
import { MainCompo } from '../MainCompo/MainCompo'
import logo from '../../Images/reebok-logo.png'
export const Home = () => {
  return (
    <>
 <div className='flex '>
 <div className='relative bg-green-600 text-white font-bold text-[2.1rem] uppercase px-6 py-2 w-[60vw] shadow-md'
     style={{ clipPath: 'polygon(0 0, 100% 0, 94% 100%, 0% 100%)' }}> 
  <MainCompo>
    <h1>HOME PAGE</h1>
  </MainCompo>
</div>

   <div className='relative bg-pink-300 text-green-600  flex  items-center font-bold uppercase px-6  py-2 w-[40vw] shadow-md '
    style={{ clipPath: 'polygon(6% 100%, 0% 100%, 0 0, 100% 6% )' }}>
   <MainCompo>
    <div className='FLEX justify-center items-center relative'>
    <p className='absolute left-16 md:font-bold md:text-[0.8rem] -top-6'>PARTNERSHIP BY</p>
     <img src={logo} alt="reebok logo " className='w-100' /> </div> </MainCompo>
   </div>
 </div>
  
 
   
    </>
  )
}
