import React from 'react';
import { MainCompo } from '../MainCompo/MainCompo';
import logo from '../../Images/reebok-logo.png';

export const Home = () => {
  return (
    <>
    <div className="flex w-full">
  {/* Left Side */}
  <div
    className="bg-green-600 text-white font-bold text-2xl uppercase px-6 py-4 w-[60%]"
    style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
  >
    HOME PAGE
  </div>

  {/* Right Side */}
  <div
    className="bg-pink-300 text-green-600 flex flex-col items-center justify-center px-6 py-4 w-[40%]"
    style={{ clipPath: 'polygon(100% 100%, 15% 100%, 0 0, 100% 0)' }}
  >
    <p>PARTNERSHIP BY</p>
    <img src={logo} alt="Reebok Logo" className="max-w-[120px]" />
  </div>
</div>

    </>
  );
};
