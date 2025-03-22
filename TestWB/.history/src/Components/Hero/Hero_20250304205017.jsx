import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Fancybox (v4)
import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox.css';

// Images
import bgImage from '../../Images/hero-bg.png';
import thumb from '../../Images/video-thumbnail-img.png';
import playIcon from '../../Images/play-icon.png';

// ----- Custom Arrows -----
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        right: '25px',
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right text-white text-3xl cursor-pointer" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        left: '25px',
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left text-white text-3xl cursor-pointer" />
    </div>
  );
}

// ----- Hero Component -----
export const Hero = () => {
  // Bind Fancybox on mount
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {}); // Binds to all elements with data-fancybox
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
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 20,
        }}
      >
        {/* Use gap on the <ul> to space out the dots */}
        <ul style={{ margin: 0, display: 'flex', gap: '10px' }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '30px',
          height: '4px',
          background: '#fff',
          borderRadius: '2px',
          cursor: 'pointer',
        }}
      />
    ),
  };

  // Slides data
  const slides = [
    {
      id: 1,
      bgImage: bgImage,
      heading: 'Get Ready for New Adidas Brands',
      subtext: `Adidas track and field is coming with a riveting gear 
                and a fresh look. Get everything to enhance your track performance.Adidas track and field is coming with a riveting gear 
                and a fresh look. Get everything to enhance your track performance.`,
      thumb: thumb,
      playIcon: playIcon,
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
    },
    {
      id: 2,
      bgImage: bgImage,
      heading: 'Get Ready for New Adidas Brands',
      subtext: `Adidas track and field is coming with a riveting gear 
                and a fresh look. Get everything to enhance your track performance.`,
      thumb: thumb,
      playIcon: playIcon,
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full h-[70vh] flex flex-col"
            style={{
              background: `url(${slide.bgImage}) center center / cover no-repeat`,
            }}
          >
           
            <div className="absolute inset-0 " />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 lg:px-36 py-12 w-full h-full">
              
              {/* Left Side: Text */}
              <div className="md:w-1/2 flex flex-col items-start justify-center">
                <h1 className=" text-3xl lg:text-6xl font-extrabold mb-4 uppercase">
                  {slide.heading}
                </h1>
                <p className=" text-sm md:text-base max-w-[500px] leading-relaxed">
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
                    className="w-[80%] md:w-[70%] lg:w-[60%]"
                  />
                  {/* Play Icon -> triggers Fancybox popup */}
                  <a
                    href={slide.videoLink}
                    data-fancybox="video-gallery"
                    className="absolute top-1/2 left-1/2 
                               transform -translate-x-1/2 -translate-y-1/2 
                               cursor-pointer"
                  >
                    <img
                      src={slide.playIcon}
                      alt="Play Icon"
                      className="w-12 h-12"
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
