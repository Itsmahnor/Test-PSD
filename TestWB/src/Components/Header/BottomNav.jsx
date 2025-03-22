import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth <= 790);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth <= 790);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = ["OUR TRACKS", "FIND EVENTS", "TRACK MAP", "SHOP", "ABOUT US"];

  return (
    <>
     

      {/* Navbar */}
      <div className="flex items-center  sticky justify-between bg-green-950 text-white  px-4 py-3 md:px-20 relative">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-24 md:w-32" />

        {/* Membership & Account Buttons */}
        {!mobileView && (
          <div className="flex gap-2">
            <button className="bg-green-600 px-6 py-2 uppercase font-bold shadow-md skew-x-[-14deg]">Membership</button>
            <button className="bg-green-800 px-6 py-2 uppercase font-bold shadow-md skew-x-[-14deg]">Account</button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {mobileView && (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Side Menu */}
      {mobileView && menuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black w-[100vw] pt-15 bg-opacity-50 z-40" onClick={toggleMenu}></div>

          {/* Side Menu */}
          <div className="fixed top-0 left-0 h-full w-[100%] w-4/5  bg-green-900 z-50 shadow-lg p-4 flex flex-col">
            {/* Close Button */}
            <FaTimes className="text-white text-2xl self-end cursor-pointer" onClick={toggleMenu} />

            {/* Search Bar */}
            <div className="flex items-center bg-green-950 px-3 py-2 mt-4">
              <input
                type="text"
                placeholder="SEARCH"
                className="flex-grow bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none px-2"
              />
              <FaSearch className="text-gray-400" />
            </div>

            {/* Navigation Links */}
            <nav className="mt-6 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`block py-3 px-4 text-white font-bold text-lg transition hover:bg-green-600 hover:skew-x-[-10deg] hover:px-6`}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Desktop Nav Links + Search Bar */}
      {!mobileView && (
        <div className="flex items-center justify-around bg-green-800 text-white font-bold py-3">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-lg hover:bg-green-600 hover:skew-x-[-10deg] py-2 px-3 transition duration-300"
            >
              {link}
            </a>
          ))}
          {/* Desktop Search */}
          <div className="flex items-center bg-green-950 px-3 py-2 rounded-md">
            <input
              type="search"
              placeholder="SEARCH"
              className="flex-grow bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none px-2"
            />
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
