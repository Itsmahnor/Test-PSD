import React from 'react'
import { MainCompo } from '../MainCompo/MainCompo'
import logo from '../../Images/reebok-logo.png'

export const Home = () => {
  return (
    <div className='flex flex-col md:flex-row w-full'>
      {/* Left Section (Home Page) */}
      <div className='relative bg-green-600 text-white font-bold text-[2.1rem] uppercase px-6 py-2 w-full md:w-[60vw] shadow-md skew-x-[14deg] flex items-center justify-center'>
        <MainCompo>
          <h1 className='text-center md:text-left'>HOME PAGE</h1>
        </MainCompo>
      </div>

      {/* Right Section (Partnership) */}
      <div className='relative bg-white text-green-600 flex flex-col items-center justify-center font-bold uppercase px-6 py-2 w-full md:w-[40vw] shadow-md skew-x-[14deg]'>
        <MainCompo>
          <div className='flex flex-col md:flex-row items-center justify-center relative'>
            <p className='md:absolute md:left-16 md:-top-6 text-center md:text-left text-sm md:text-base'>
              PARTNERSHIP BY
            </p>
            <img
              src={logo}
              alt="Reebok Logo"
              className='max-w-[100px] md:max-w-[150px] lg:max-w-[200px] mt-2 md:mt-0'
            />
          </div>
        </MainCompo>
      </div>
    </div>
  )
}
