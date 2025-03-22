import React from 'react';
import Slider from 'react-slick';               // <-- React Slick
import 'slick-carousel/slick/slick.css';        // <-- Slick core CSS
import 'slick-carousel/slick/slick-theme.css';  // <-- Slick theme (arrows, etc.)

import shoeImage from '../../Images/hero-bg.png';  
import thumb from '../../Images/video-thumbnail-img.png';
import playicon from '../../Images/play-icon.png';
import smallImg3 from '../../Images/hero-bg.png';
import smallImg4 from '../../Images/hero-bg.png';

// OPTIONAL: Custom Arrow Components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '25px', zIndex: 10 }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right text-white text-3xl" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '25px', zIndex: 10 }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left text-white text-3xl" />
    </div>
  );
}

export const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // You can customize more settings if needed
  };

  // Slides data (you can add more slides as needed)
  const slides = [
    {
      id: 1,
      bgImage: shoeImage,
      heading: 'Get Ready for New Adidas Brands',
      subtext: `Adidas track and field is coming with a riveting gear and 
                a fresh look. Get everything to enhance your track performance.`,
      thumb: thumb,      // The image on the right side
      playIcon: playicon // The icon to overlay on top of thumb
    },
    {
      id: 2,
      bgImage: smallImg3,
      heading: 'Second Slide Heading',
      subtext: `Another brand new set of Adidas gear to explore. 
                Don’t miss out on the latest footwear and apparel.`,
      thumb: smallImg4,
      playIcon: playicon
    }
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-[70vh] bg-cover bg-center flex flex-col"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-green-950 bg-opacity-55" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 lg:px-36 py-12 w-full h-full">
              
              {/* Left Side: Text */}
              <div className="md:w-1/2 flex flex-col items-start justify-center">
                <h1 className="text-white text-3xl lg:text-6xl font-extrabold mb-4 uppercase">
                  {slide.heading}
                </h1>
                <p className="text-white text-sm md:text-base max-w-[500px] leading-relaxed">
                  {slide.subtext}
                </p>
              </div>
              
              {/* Right Side: Thumbnail with Play Icon */}
              <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
                <div className="relative w-full max-w-xl flex items-center justify-center">
                  {/* Thumbnail (video preview, shoe, etc.) */}
                  <img
                    src={slide.thumb}
                    alt="Thumbnail"
                    className="w-[80%] md:w-[70%] lg:w-[60%]"
                  />
                  {/* Play Icon centered */}
                  <img
                    src={slide.playIcon}
                    alt="Play Icon"
                    className="absolute top-1/2 left-1/2 
                               transform -translate-x-1/2 -translate-y-1/2 
                               w-12 h-12 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
