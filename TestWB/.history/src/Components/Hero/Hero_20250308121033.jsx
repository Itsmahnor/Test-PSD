import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fancybox (v4)
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Images
import bgImage from "../../Images/hero-bg.png";
import thumb from "../../Images/video-thumbnail-img.png";
import playIcon from "../../Images/play-icon.png";
import leftArrowImg from "../../Images/hero-slider-leftt-arrow.png";  // 
import rightArrowImg from "../../Images/hero-slider-right-arrow.png"; // 

// ----- Custom Arrows -----
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <img src={rightArrowImg} alt="Next" className="w-10 h-10" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <img src={leftArrowImg} alt="Previous" className="w-10 h-10" />
    </div>
  );
}

// ----- Hero Component -----
export const Hero = () => {
  // Bind Fancybox on mount
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {}); // Binds Fancybox to all elements with data-fancybox
    return () => {
      Fancybox.unbind("[data-fancybox]");
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // ❌ Automatic scrolling disabled
    nextArrow: <NextArrow />, // ✅ Custom Right Arrow
    prevArrow: <PrevArrow />, // ✅ Custom Left Arrow
    dots: false, // ❌ Dots removed
  };

  // Slides data
  const slides = [
    {
      id: 1,
      heading: "Get Ready for New Adidas Brands",
      subtext: `Adidas track and field is coming with a riveting gear 
                and a fresh look. Get everything to enhance your track performance.`,
      thumb: thumb,
      playIcon: playIcon,
      videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 2,
      heading: "Unlock the Future of Sportswear",
      subtext: `New innovative sports gear with cutting-edge technology. Experience next-level comfort and performance.`,
      thumb: thumb,
      playIcon: playIcon,
      videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="w-full h-[70vh] relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[70vh]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              {/* Green Opacity Overlay */}
              <div className="absolute inset-0 bg-green-900 bg-opacity-50" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-36 py-12 w-full h-full text-white">
              {/* Video section */}
              <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
                <div className="relative w-full max-w-xl flex items-center justify-center">
                  {/* Thumbnail */}
                  <img
                    src={slide.thumb}
                    alt="Thumbnail"
                    className="w-[80%] md:w-[70%] lg:w-[60%] rounded-lg shadow-lg"
                  />
                  {/* Play Icon -> triggers Fancybox popup */}
                  <a
                    href={slide.videoLink}
                    data-fancybox="video-gallery"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <img
                      src={slide.playIcon}
                      alt="Play Icon"
                      className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:scale-110"
                    />
                  </a>
                </div>
              </div>

              {/* Text section */}
              <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-center md:text-left order-2 md:order-1">
                <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 uppercase">
                  {slide.heading}
                </h1>
                <p className="text-sm md:text-lg max-w-[500px] leading-relaxed">
                  {slide.subtext}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
