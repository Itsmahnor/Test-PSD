import React from 'react'
import { MainCompo } from '../MainCompo/MainCompo'

export const Home = () => {
  return (
    <>
 <div className='flex '>
 <div className='relative bg-green-600 text-white font-bold text-[2.5rem] uppercase px-6 py-2 w-[60vw] shadow-md skew-x-[-14deg]'>
   <MainCompo >    <h1 className=''>HOME PAGE</h1></MainCompo>
   </div>
   <div className='relative bg-white text-green-600 font-bold uppercase px-6 py-2 w-[40vw] shadow-md skew-x-[-14deg]'>
   <MainCompo >    <h1 className=''>Home Page</h1></MainCompo>
   </div>
 </div>
  
 
   
    </>
  )
}
