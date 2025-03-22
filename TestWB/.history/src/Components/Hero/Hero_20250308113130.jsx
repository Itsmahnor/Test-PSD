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

// ----- Custom Arrows -----
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white cursor-pointer`}
      style={{ ...style, right: "25px", zIndex: 10 }}
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
      className={`${className} text-white cursor-pointer`}
      style={{ ...style, left: "25px", zIndex: 10 }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left text-white text-3xl" />
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

  // Slick settings
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full flex justify-center z-20">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-8 h-1 bg-white rounded cursor-pointer" />
    ),
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
    <div className="w-full h-screen">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-screen">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              {/* Green Opacity Overlay */}
              <div className="absolute inset-0 bg-green-900 bg-opacity-50" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center justify-between px-6 lg:px-36 py-12 w-full h-full text-white">
              {/* Left Side: Text */}
              <div className="md:w-1/2 flex flex-col items-start justify-center text-center md:text-left">
                <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 uppercase">
                  {slide.heading}
                </h1>
                <p className="text-sm md:text-lg max-w-[500px] leading-relaxed">
                  {slide.subtext}
                </p>
              </div>

              {/* Right Side: Thumbnail with Play Icon */}
              <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
