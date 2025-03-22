import React, { useEffect, useState } from "react";
import logo from '../../Images/logo.png'
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const [icon, setIcon] = useState(window.innerWidth <=  400);
  // state to handle toggle of bar
  const [click,setclick]=useState(false);

  // function to handle bar
  const HandleBar=()=>{
    console.log("hello bar")
    setclick(prev=> !prev)
  }
  useEffect(() => {
    const handleResize = () => {
      setIcon(window.innerWidth <= 400);
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

      {icon && <FaBars className="text-[2rem] text-white" onClick={HandleBar}/>}

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
      {!icon &&
      <div className="flex items-center justify-around md:space-x-4  bg-green-800   w-[100vw]">
       <div className="lg:w-[45vw] md:w-[60vw]  flex justify-between items-center ">
       <a href="#" className="text-[1.2rem] text-white font-bold hover:bg-green-600 hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">OUR TRACKS</a>
       <a href="#" className="text-[1.2rem] text-white font-bold hover:bg-green-600 hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">FIND EVENTS</a><a href="#" className="text-[1.2rem] text-white font-bold hover:bg-green-600 hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">TRACK MAP</a><a href="#" className="text-[1.2rem] text-white font-bold hover:bg-green-600 hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">SHOP</a><a href="#" className="text-[1.2rem] text-white font-bold hover:bg-green-600 hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">ABOUT US</a>
       </div>
       <div className="lg:w-[20vw] md:w-[40vw] flex items-center bg-green-950 px-3 py-2 rounded-md">
  <input
    type="search"
    placeholder="SEARCH"
    className="flex-grow bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none px-2 w-[60%]"
  />
  <FaSearch className="text-gray-400" />
</div>
      </div>}

      {/* links for small screen */}
      {click && 
      icon && (
      <div className="flex items-center pt-3 justify-around   bg-green-800 flex-col  transition duration-500  w-[100vw]">
        {/* search bar */}
           <div className="w-[90%] flex items-center bg-green-950 px-3 py-3  ">
  <input
    type="search"
    placeholder="SEARCH"
    className="flex-grow bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none px-2 w-100"
  />
  <FaSearch className="text-gray-400"  />
</div>
{/* links */}
       <div className="w-[100%] h-[100vh]  flex px-6  flex-col pt-4 ">
       <a href="#" className="text-[1.2rem] text-white font-bold w-[40%] hover:bg-green-600 hover:w-[40%] hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">OUR TRACKS</a>
       <a href="#" className="text-[1.2rem] text-white font-bold w-[40%] hover:bg-green-600 hover:w-[40%] hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">FIND EVENTS</a><a href="#" className="text-[1.2rem] w-[40%] text-white font-bold hover:w-[40%] hover:bg-green-600 hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">TRACK MAP</a><a href="#" className="text-[1.2rem] w-[40%] text-white  hover:w-[40%] font-bold hover:bg-green-600 hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">SHOP</a><a href="#" className="text-[1.2rem] w-[40%] text-white hover:w-[40%] font-bold hover:bg-green-600 hover:py-3 py-4 hover:px-3 hover:skew-x-[-10deg] transition duration-300 ">ABOUT US</a>
       </div>
    
      </div>)}
      </>
  );
};

export default Navbar;
