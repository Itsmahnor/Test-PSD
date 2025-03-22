import React from 'react';
import { MainCompo } from '../MainCompo/MainCompo';
import logo from '../../Images/reebok-logo.png';

export const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        
        {/* Left Side - Right Skewed */}
        <div
          className="relative bg-green-600 text-white font-bold text-[2.1rem] uppercase px-6 py-2 w-full md:w-[70vw] shadow-md flex items-center justify-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 94% 100%, 0% 100%)' }}
        >
          <MainCompo>
            <h1 className="text-center">HOME PAGE</h1>
          </MainCompo>
        </div>

        {/* Right Side - Left Bottom Skewed (Opposite Direction) */}
        <div
          className="relative bg-white text-green-600 flex flex-col items-center justify-center font-bold uppercase px-6 py-2 w-full md:w-[30vw] "
          style={{ clipPath: 'polygon(100% 100%, 0% %, 10% 0, 100% 0)' }}
        >
          <MainCompo>
            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 relative">
              <p className="text-center md:absolute md:left-4 md:-top-4 text-sm md:text-base">
                PARTNERSHIP BY
              </p>
              <img
                src={logo}
                alt="reebok logo"
                className="max-w-[80px] md:max-w-[120px] lg:max-w-[150px]"
              />
            </div>
          </MainCompo>
        </div>

      </div>
    </>
  );
};
