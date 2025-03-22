import React from 'react';
import { MainCompo } from '../MainCompo/MainCompo';
import heroImage from '../../Images/hero-bg.png';

export const Hero = () => {
  return (
    <div
      className="lg:h-[80vh] h-auto w-[100vw] opacity-75 bg-green-700 lg:p-40"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MainCompo>
        <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Side - Text */}
          <div className="w-full md:w-1/2">
            <h1 className="text-lg font-extrabold lg:text-[5rem] text-white">
              GET READY FOR NEW ADIDAS BRANDS
            </h1>
          </div>
          
          {/* Right Side - Video */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <video controls className="w-full max-w-[600px] rounded shadow-lg">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
        </div>
      </MainCompo>
    </div>
  );
};
