import React from 'react'
import { MainCompo } from '../MainCompo/MainCompo'
import logo from '../../Images/reebok-logo.png'

export const Home = () => {
  return (
    <>
      <div className='flex '>
        
        {/* Left (Green) Section */}
        <div
          className='relative bg-green-600 text-white font-bold text-[2.1rem] uppercase px-6 py-2 w-[65vw] shadow-md'
          style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }}
        >
          <MainCompo>
            <h1>HOME PAGE</h1>
          </MainCompo>
        </div>

        {/* Right (White) Section */}
        <div className='relative bg-white text-green-600 flex items-center font-bold uppercase px-6 py-2 w-[25vw] skew-x-[-14deg]'>
          <MainCompo>
            {/* Container for text & logo */}
            <div className='flex flex-col items-center justify-center gap-2 relative'>
              
              {/* Text: "PARTNERSHIP BY" */}
              {/* For small screens: normal flow; for medium screens: absolute */}
              <p className='text-sm sm:text-base md:text-lg font-bold md:absolute md:left-4 md:-top-6'>
                PARTNERSHIP BY
              </p>
              
              {/* Responsive Logo */}
              <img
                src={logo}
                alt="reebok logo"
                // Use w-auto + max-w so the logo scales without distorting
                className='w-auto max-w-[80px] sm:max-w-[120px] md:max-w-[150px]'
              />
            </div>
          </MainCompo>
        </div>

      </div>
    </>
  )
}
