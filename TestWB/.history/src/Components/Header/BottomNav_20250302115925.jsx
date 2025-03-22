import React, { useEffect, useState } from "react";
import logo from '../../Images/logo.png'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const[icon,seticon]=useState(false);
  useEffect(()=>{
if(window.location.size == 440){
seticon((prev)=> !prev)
}
  },icon)
  return (
    <div className="flex items-center justify-between space-x-4 p-4 bg-green-950 md:px-44 flex-wrap gap-3">
      {/* logo */}
    <img src={logo} alt="logo" />
    {icon && <FaBars}
    {/* right side */}
    <div className="flex gap-2">
      {/* Membership Button */}
      <button className="text-white  font-bold px-6 py-2 rounded-sm transition duration-300 bg-green-600 hover:text-white shadow-md">
        Membership
      </button>

      {/* Account Button */}
      <button className=" text-white font-bold px-6 py-2 rounded-sm transition duration-300 bg-green-800 hover:text-white shadow-md">
        Account
      </button>
    </div></div>
  );
};

export default Navbar;
