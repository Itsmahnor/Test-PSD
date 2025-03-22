import React, { useEffect, useState } from "react";
import logo from '../../Images/logo.png'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [icon, setIcon] = useState(window.innerWidth <=  465);

  useEffect(() => {
    const handleResize = () => {
      setIcon(window.innerWidth <= 465);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-between space-x-4 p-4 bg-green-950 md:px-44 flex-wrap gap-5">
      {/* logo */}
      <img src={logo} alt="logo" />

      {icon && <FaBars className="text-[2rem] text-white" />}

      {/* right side for large screen*/}
 {!icon &&
      <div className="flex gap-2">
        {/* Membership Button */}
        <button className="text-white font-bold px-6 py-2 rounded-sm transition duration-300 bg-green-600 hover:text-white shadow-md ">
          Membership
        </button>

        {/* Account Button */}
        <button className="text-white font-bold px-6 py-2 rounded-sm transition duration-300 bg-green-800 hover:text-white shadow-md">
          Account
        </button>
      </div>}
      {/* for small screen */}
      {icon &&
      <div className="flex w-100">
        {/* Membership Button */}
        <button className="text-white font-bold px-6 py-2 rounded-sm transition duration-300 bg-green-600 hover:text-white shadow-md  w-50">
          Membership
        </button>

        {/* Account Button */}
        <button className="text-white font-bold px-6 py-2 rounded-sm transition duration-300 bg-green-800 hover:text-white shadow-md w-50">
          Account
        </button>
      </div>}
    </div>
  );
};

export default Navbar;
