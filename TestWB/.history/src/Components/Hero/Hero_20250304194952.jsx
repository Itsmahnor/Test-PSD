import React from 'react';
import shoeImage from '../../Images/hero-bg.png';  // Replace with your shoe image
import smallImg1 from '../../Images/hero-bg.png'; // Replace with your images
import smallImg2 from '../../Images/hero-bg.png';
import smallImg3 from '../../Images/hero-bg.png';
import smallImg4 from '../../Images/hero-bg.png';

export const Hero = () => {
  return (
    <div
      className="relative w-full h-[70vh] bg-cover bg-center bg-green-950 bg-opacity-55 flex flex-col"
      style={{
        backgroundImage: `url(${shoeImage})`, 
        // Replace with your background
      }}
    >
      {/* Optional Overlay for darker background */}
      <div className="absolute inset-0 bg-green-950 bg-opacity-55" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-48 py-12 w-full h-full">
        
        {/* Left Section: Text */}
        <div className="md:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-white text-3xl md:text-6xl font-extrabold mb-4 uppercase">
            Get Ready for New Adidas Brands
          </h1>
          <p className="text-white text-sm md:text-base max-w-[500px] leading-relaxed">
            Adidas track and field is coming with a riveting gear and a fresh look.
            Get everything to enhance your track performance. Adidas track and field is coming with a riveting gear and a fresh look.
            Get everything to enhance your track performance. 
          </p>
        </div>

        {/* Right Section: Shoe Image */}
        <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <img
            src={shoeImage}
            alt="Shoe"
            className="w-[80%] md:w-[70%] lg:w-[60%] max-w-xl"
          />
        </div>
      </div>
{/* 
      
      <div className="relative z-10 w-full  bg-opacity-80 px-4 py-4 md:py-6">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-3">
          Featured Gear
        </h2>
        
       
        <div className="flex overflow-x-auto gap-4 py-2">
          {[smallImg1, smallImg2, smallImg3, smallImg4].map((img, index) => (
            <div
              key={index}
              className="min-w-[150px] md:min-w-[200px] bg-white p-2 rounded shadow"
            >
              <img
                src={img}
                alt={`Featured ${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};


