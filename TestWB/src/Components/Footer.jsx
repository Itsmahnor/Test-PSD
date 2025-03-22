import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-4 text-center">
      {/* Navigation Links */}
      <div className="space-x-4 mb-2">
        <a href="#our-tracks" className="hover:underline">OUR TRACKS</a>
        <span>/</span>
        <a href="#find-events" className="hover:underline">FIND EVENTS</a>
        <span>/</span>
        <a href="#track-map" className="hover:underline">TRACK MAP</a>
        <span>/</span>
        <a href="#shop" className="hover:underline">SHOP</a>
        <span>/</span>
        <a href="#about-us" className="hover:underline">ABOUT US</a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-2">
        <a href="#facebook" aria-label="Facebook" className="hover:opacity-75">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#twitter" aria-label="Twitter" className="hover:opacity-75">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#instagram" aria-label="Instagram" className="hover:opacity-75">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#linkedin" aria-label="LinkedIn" className="hover:opacity-75">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm">
        &copy; copyright 2020 Adidas
      </div>
    </footer>
  );
};

export default Footer;
