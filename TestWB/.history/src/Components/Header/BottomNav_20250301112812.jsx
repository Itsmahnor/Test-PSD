import React from "react";
import logo from '../../Images/logo.png'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between space-x-4 p-4 bg-green-950">
      {/* logo */}
    <img src={logo} alt="" />
      {/* Membership Button */}
      <button className="bg-white text-[#04211e] font-bold px-6 py-2 rounded-full transition duration-300 hover:bg-[#098E68] hover:text-white shadow-md">
        Membership
      </button>

      {/* Account Button */}
      <button className="bg-white text-[#04211e] font-bold px-6 py-2 rounded-full transition duration-300 hover:bg-[#098E68] hover:text-white shadow-md">
        Account
      </button>
    </div>
  );
};

export default Navbar;
