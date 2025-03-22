import React from "react";
import { useEffect,useState } from "react";
import { MainCompo } from "./MainCompo/MainCompo";

import bgImage from "../Images/hero-bg.png";
import bgImage1 from "../Images/zig-zag-img-2.png";
export default function DiagonalCards() {
      const [mobileView, setMobileView] = useState(window.innerWidth >= 790);
    
      useEffect(() => {
        const handleResize = () => setMobileView(window.innerWidth >= 790);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <section className="bg-green-900 text-white py-8">
    <MainCompo>
   
      <div className="max-w-8xl mx-auto md:px-28 flex flex-col gap-8">
        
        {/* --- Card 1: Image Left, Text Right --- */}
        <div className="flex flex-col md:flex-row bg-green-800 rounded-lg overflow-hidden">
          {/* Image portion (with diagonal) */}
          <div className="md:w-1/2 relative">
            <img
              src={bgImage} // replace with your path
              alt="some alt"
              className="w-full h-full object-cover"
              style={mobileView?{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              }:{}}
            />
          </div>
          {/* Text portion */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2 uppercase">
              2019 National Champions Crowned at Reebok
            </h3>
            <p className="mb-4">
              Membership has its perks. Joining ADIDAS means you can race at
              your local tracks.
            </p>
            <a
              href="#"
              className="inline-block mt-2 bg-white text-green-900 px-4 py-2 font-bold uppercase hover:bg-gray-200"
            >
              Read More
            </a>
          </div>
        </div>

        {/* --- Card 2: Image Right, Text Left --- */}
        <div className="flex flex-col md:flex-row bg-green-800 rounded-lg overflow-hidden">
          {/* Text portion */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-2 uppercase">
              2019 National Champions Crowned at Reebok
            </h3>
            <p className="mb-4">
              Membership has its perks. Joining ADIDAS means you can race at
              your local tracks.
            </p>
            <a
              href="#"
              className="inline-block mt-2 bg-white text-green-900 px-4 py-2 font-bold uppercase hover:bg-gray-200"
            >
              Read More
            </a>
          </div>
          {/* Image portion (with diagonal) */}
          <div className="md:w-1/2 relative order-1 md:order-2">
            <img
              src={bgImage1} // replace with your path
              alt="some alt"
              className="w-full h-full object-cover"
              
              style={mobileView?{
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
              }:{}}
            />
          </div>
        </div>

      </div>
   </MainCompo> </section>
  );
}
