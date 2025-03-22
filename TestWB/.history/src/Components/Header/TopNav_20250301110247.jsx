import React from 'react';
import { RxCross1 } from "react-icons/rx";

export const Header = () => {
  return (
    <div className="h-auto md:h-[30px] flex items-center justify-between gap-2 font-semibold w-full md:px-4 px-1">
      <p></p>
      {/* Text */}
      <p className="text-center text-xs md:text-sm">
        LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL /
        <a href="#" className="text-green-600 border-b-2 border-green-600 ml-1">
          WATCH NOW
        </a>
      </p>

      {/* Close Button */}
      <button className="p-2 bg-green-600 text-white flex justify-center items-center rounded-full text-sm font-bold cursor-pointer">
        <RxCross1 size={12} />
      </button>
    </div>
  );
};
