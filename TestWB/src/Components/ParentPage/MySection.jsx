import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fancybox (v4) - only if you need popups
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


import thumbnail from "../../Images/thubnail-slider-img.png";
import leftArrowImg from "../../Images/hero-slider-leftt-arrow.png";
import rightArrowImg from "../../Images/hero-slider-right-arrow.png";
import postimg from '../../Images/post-img.png'
// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -right-10 transform -translate-y-1/2 cursor-pointer z-10"
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
      className="absolute top-1/2 -left-10 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <img src={leftArrowImg} alt="Previous" className="w-10 h-10" />
    </div>
  );
}

export default function NoHeroPage() {
  // If you need Fancybox to bind on mount
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.unbind("[data-fancybox]");
    };
  }, []);

  // Example slides for the thumbnail slider
  const slides = [
    { id: 1, img: thumbnail },
    { id: 2, img: thumbnail },
    { id: 3, img: thumbnail },
    { id: 4, img: thumbnail },
  ];

  // Example bottom cards
  const bottomCards = [
    {
      id: 1,
      src: postimg,
      title: "2019 National Champions Crowned at Reebok",
      description: "Membership has its perks. Joining Reebok was easy...",
      link: "#",
    },
    {
      id: 2,
      src: postimg,
      title: "2019 National Champions Crowned at Reebok",
      description: "All your national champs on your local tracks...",
      link: "#",
    },
    {
      id: 3,
      src: postimg,
      title: "2019 National Champions Crowned at Reebok",
      description: "Join now and grab your seat...",
      link: "#",
    },
    
  ];

  // Example events
  const events = [
    { id: 1, title: "Show in USA", subtitle: "USA", link: "#" },
    { id: 2, title: "Adidas Show in USA", subtitle: "USA", link: "#" },
    { id: 3, title: "Adidas in USA", subtitle: "USA", link: "#" },
    { id: 4, title: "Adidas in USA", subtitle: "USA", link: "#" },
  ];

  // Slider settings
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4, // how many thumbnails are visible at once
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet & below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="">
      {/* =============== TOP SECTION (50/50) =============== */}
<section className="bg-green-900 text-white w-[100vw] flex md:justify-start justify-center items-start md:px-10">
  {/* Remove mx-auto to prevent centering */}
  <div className="w-[60vw] py-8 px-4">
    {/* Left half: Thumbnail Slider */}
    {/* Change justify-center to justify-start */}
    <div className="flex items-center justify-start">
      <Slider {...settings} className="w-full">
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <img
              src={slide.img}
              alt="Thumbnail"
              className="border-4 border-green-600 w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>


      {/* =============== MAIN CONTENT (CARDS & EVENTS) =============== */}
      <section className="bg-green-900 text-white py-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {/* Bottom Cards (spanning 2 columns on desktop) */}
          <div className="md:col-span-2 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {bottomCards.map((card) => (
              <div key={card.id} className="text-white bg-green-600 h-auto  rounded shadow p-4 text-black">
                <img
                  src={card.src}
                  alt={card.title}
                  className="mb-4 w-full lg:h-[30vh] object-cover h-auto"
                />
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm mb-4">{card.description}</p>
                <div className="">
                <a
                  href={card.link || "#"}
                  className="text-white pt-3 font-semibold hover:underline"
                >
                  Read More
                </a>
                </div>
        
              </div>
            ))}
          </div>

          {/* Events Sidebar */}
          <aside className="bg-green-600 h-auto md:h-[60vh] p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Events</h2>
            <ul>
              {events.map((event, index) => (
                <li key={event.id} className="flex items-start mb-4">
                  {/* Number box */}
                  <div className="bg-white text-green-800 w-8 h-8 flex items-center justify-center mr-2 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <a
                      href={event.link || "#"}
                      className="text-white font-semibold hover:underline"
                    >
                      {event.title}
                    </a>
                    <p className="text-sm text-gray-200">{event.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
