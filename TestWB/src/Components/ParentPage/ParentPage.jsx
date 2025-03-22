// ParentPage.jsx

import React from "react";
import MySection from "./MySection";
import postimg from '../../Images/post-img.png'
export default function ParentPage() {
  // Top row images
  const topImages = [
    {
      id: 1,
      src: "/images/ball-1.png",
      alt: "Soccer Ball 1",
    },
    {
      id: 2,
      src: "/images/ball-2.png",
      alt: "Soccer Ball 2",
    },
    {
      id: 3,
      src: "/images/shoe-1.png",
      alt: "Shoe 1",
    },
    {
      id: 4,
      src: "/images/shoe-2.png",
      alt: "Shoe 2",
    },
  ];

  // Bottom cards
  const bottomCards = [
    {
      id: 1,
      src:{postimg},
      title: "2019 National Champions Crowned at Reebok",
      description: "Membership has its perks. Joining Reebok was easy...",
      link: "#",
    },
    {
      id: 2,
      src:{postimg},
      title: "2019 National Champions Crowned at Reebok",
      description: "All your national champs on your local tracks...",
      link: "#",
    },
    {
      id: 3,
      src:{postimg},
      title: "2019 National Champions Crowned at Reebok",
      description: "Join now and grab your seat...",
      link: "#",
    },
   
  ];

  // Events sidebar
  const events = [
    {
      id: 1,
      title: "Show in USA",
      subtitle: "USA",
      link: "#",
    },
    {
      id: 2,
      title: "Adidas Show in USA",
      subtitle: "USA",
      link: "#",
    },
    {
      id: 3,
      title: "Adidas in USA",
      subtitle: "USA",
      link: "#",
    },
    {
      id: 4,
      title: "Adidas in USA",
      subtitle: "USA",
      link: "#",
    },
  ];

  return (
    <div>
      <MySection
       
        bottomCards={bottomCards}
        events={events}
      />
    </div>
  );
}
