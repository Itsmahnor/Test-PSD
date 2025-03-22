import React from 'react';

export const Header = () => {
  return (
    <div className="bg-pink-400 h-[3rem] flex items-center justify-between font-semibold w-full px-4">
      <p className="text-center">
        LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL / 
        <a href="#" className="text-green-600 border-b-2 border-green-300 ml-1">WATCH NOW</a>
      </p>
      <p className="w-[20px] h-[20px] bg-green-600 text-black flex justify-center items-center rounded-full text-sm font-bold cursor-pointer">
        ✖
      </p>
    </div>
  );
};
