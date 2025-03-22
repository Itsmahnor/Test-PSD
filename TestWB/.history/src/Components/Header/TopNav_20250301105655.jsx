import React from 'react';
import { RxCross1 } from "react-icons/rx";
export const Header = () => {
  return (
    <div className="bg-pink-400 h-[3rem] flex items-center justify-between font-semibold w-full px-4">
      <p></p>
      <p className="text-center">
        LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL / 
        <a href="#" className="text-green-600 border-b-2 border-green-600 ml-1">WATCH NOW</a>
      </p>
      <p className="w-[20px] h-[20px] bg-green-600 text-[10px] text-white flex justify-center items-center rounded-full text-sm font-bold cursor-pointer">
       <RxCross1 />
      </p>
    </div>
  );
};
