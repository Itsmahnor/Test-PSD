import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

export const Header = () => {
  // to control visibility of topnav
 const[first,setfirst]= useState(true)
  return (
    <>
    {first && (
    <div className="h-auto md:h-[40px] flex items-center justify-between gap-2 font-bold w-full  px-1 sm:h-[30px] pt-2 static">
      <p ></p>
     
      <p className="text-center text-xs md:text-sm">
        LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL /
        <a href="#" className="text-green-600 border-b-2 border-green-600 ml-1">
          WATCH NOW
        </a>
      </p>

      <button className="bg-white text-[#04211e] font-bold px-3 py-1 rounded-md transition duration-300 hover:bg-[#04211e] hover:text-white">
  Membership
</button>
<button className="bg-white text-[#04211e] font-bold px-3 py-1 rounded-md transition duration-300 hover:bg-[#04211e] hover:text-white">
  Account
</button>

      <button className="p-1 bg-green-600 text-white flex justify-center items-center rounded-full text-sm font-bold cursor-pointer" onClick={()=>{setfirst(prev=> !prev)}}>
        <RxCross1 size={12} />
      </button>
    </div>)}
    </>
  );
};
