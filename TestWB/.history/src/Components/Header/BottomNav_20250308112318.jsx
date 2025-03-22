import React, { useEffect, useState } from "react";
import logo from "../../Images/logo.png";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [icon, setIcon] = useState(window.innerWidth <= 790);
  const [click, setClick] = useState(false);

  // Toggle Side Nav
  const handleBar = () => {
    setClick((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIcon(window.innerWidth <= 790);
      if (window.innerWidth > 790) {
        setClick(false); // Close sidebar on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Top Navbar (Fixed at the Top) */}
      <div className="flex items-center justify-between p-4 bg-green-950 md:px-44 gap-5 w-full fixed top-0 left-0 z-50">
        {/* Logo */}
        <img src={logo} alt="logo" />

        {/* Mobile Menu Icon */}
        {icon && (
          <FaBars className="text-[2rem] text-white cursor-pointer" onClick={handleBar} />
        )}

        {/* Buttons for Large Screens */}
        {!icon && (
          <div className="flex gap-2">
            <button className="bg-green-600 text-white font-bold uppercase px-6 py-2 shadow-md skew-x-[-14deg]">
              MEMBERSHIP
            </button>
            <button className="text-white font-bold px-6 py-2 bg-green-800 shadow-md skew-x-[-14deg]">
              ACCOUNT
            </button>
          </div>
        )}
      </div>

      {/* Side Navbar for Mobile (Starts Below Top Navbar) */}
      {click && icon && (
        <div className="fixed top-[4rem] left-0 w-full h-[calc(100vh-4rem)] bg-green-900 z-40 flex flex-col items-start p-6 shadow-lg transition-transform duration-300">
          <FaTimes className="text-white text-2xl cursor-pointer self-end" onClick={handleBar} />
          {/* Search Bar */}
          <div className="w-full flex items-center bg-green-950 px-3 py-3 mt-4">
            <input
              type="search"
              placeholder="SEARCH"
              className="flex-grow bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none px-2"
            />
            <FaSearch className="text-gray-400" />
          </div>

          {/* Navigation Links with Tilted Hover Effect */}
          <nav className="mt-6 flex flex-col w-full">
            {["OUR TRACKS", "FIND EVENTS", "TRACK MAP", "SHOP", "ABOUT US"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-lg font-bold py-3 px-4 transition w-full block hover:bg-green-600 hover:skew-x-[-10deg] hover:px-6 duration-300"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Overlay to Close Side Navbar */}
      {click && icon && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={handleBar}
        ></div>
      )}

      {/* Main Navigation for Large Screens */}
      {!icon && (
        <div className="flex items-center justify-around bg-green-800 w-full text-white font-bold py-3 ">
          {["OUR TRACKS", "FIND EVENTS", "TRACK MAP", "SHOP", "ABOUT US"].map((link, index) => (
            <a
              key={index}
              href="#"
              className="lg:text-[1.3rem] text-sm hover:bg-green-600 hover:skew-x-[-10deg] py-2 px-3 transition duration-300"
            >
              {link}
            </a>
          ))}
          <div className="lg:w-[20vw] flex items-center bg-green-950 px-3 py-2 rounded-md">
            <input
              type="search"
              placeholder="SEARCH"
              className="flex-grow bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none px-2 w-[60%]"
            />
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
