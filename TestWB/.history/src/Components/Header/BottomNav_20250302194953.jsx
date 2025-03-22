import React, { useEffect, useState } from "react";
import logo from '../../Images/logo.png'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [icon, setIcon] = useState(window.innerWidth <=  490);

  useEffect(() => {
    const handleResize = () => {
      setIcon(window.innerWidth <= 490);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <div className="flex items-center justify-between md:space-x-4 p-4 bg-green-950 md:px-44  gap-5">
      {/* logo */}
      <img src={logo} alt="logo" />

      {icon && <FaBars className="text-[2rem] text-white" />}

      {/* right side for large screen*/}
 {!icon &&
      <div className="flex gap-2">
        {/* Membership Button */}
        <button className="relative bg-green-600 text-white font-bold uppercase px-6 py-2 shadow-md skew-x-[-10deg]">
  MEMBERSHIP
</button>


        {/* Account Button */}
        <button className="text-white font-bold px-6 py-2 rounded-sm transition duration-300 bg-green-800 hover:text-white shadow-md skew-x-[-10deg]">
        ACCOUNT
        </button>
      </div>}   
     
    </div>
     {/* for small screen */}
     {icon &&
      <div className="flex w-[100vw] gap-1">
        {/* Membership Button */}
        <button className="text-white font-bold  py-3  transition duration-300 bg-green-600 hover:text-white shadow-md  w-[50vw]">
          MEMBERSHIP
        </button>

        {/* Account Button */}
        <button className="text-white font-bold  py-3  transition duration-300 bg-green-800 hover:text-white shadow-md w-[50vw]">
          ACCOUNT
        </button>
      </div>}
      {/* Main Links */}
      <div className="flex items-center justify-around md:space-x-4 p-4 bg-green-800  py-7  w-[100vw]">
       <div className="w-[40vw]  flex justify-between">
       <a href="#" className="text-[1.2rem] text-white font-bold">OUR TRACKS</a>
       <a href="#" className="text-[1.2rem] text-white font-bold">FIND EVENTS</a><a href="#" className="text-[1.2rem] text-white font-bold">TRACK MAP</a><a href="#" className="text-[1.2rem] text-white font-bold">SHOP</a><a href="#" className="text-[1.2rem] text-white font-bold">ABOUT US</a>
       </div>
     <div className="w-[20vw]">
     <input type="search"  />
      </div>   

      </div>
      
      
      </>
  );
};

export default Navbar;
