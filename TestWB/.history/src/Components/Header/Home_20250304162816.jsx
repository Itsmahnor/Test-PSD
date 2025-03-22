import React from 'react'
import { MainCompo } from '../MainCompo/MainCompo'
import logo from '../../Images/reebok-logo.png'
export const Home = () => {
  return (
    <>
 <div className='flex absolute z-1 '>
 <div className='relative bg-green-600 text-white font-bold md:text-[2.1rem] uppercase px-6 py-2 w-[60vw] shadow-md skew--[-14deg]'
  style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }} >
   <MainCompo >    <h1 className=''>HOME PAGE</h1></MainCompo>
   </div>
   <div className='relative bg-white text-green-600  flex  items-center font-bold uppercase md:px-6  py-2 w-[40vw] md:skew-x-[-14deg]'>
   <MainCompo>
    <div className='FLEX justify-center items-center relative flex flex-col  gap-2'>
    <p className='md:absolute -top-6 md:text-sm text-[9px]'>PARTNERSHIP BY</p>
     <img src={logo} alt="reebok logo " className='w-100' /> </div> </MainCompo>
   </div>
 </div>
  
 
   
    </>
  )
}
