import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Your Wedding Celebration. All rights
          reserved.
        </p>
        <div className="mt-4">
          <a
            href="#home"
            className="text-[#007AFF] hover:text-[#005BB5] transition duration-300 mx-4"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#007AFF] hover:text-[#005BB5] transition duration-300 mx-4"
          >
            About Us
          </a>
          <a
            href="#gallery"
            className="text-[#007AFF] hover:text-[#005BB5] transition duration-300 mx-4"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-[#007AFF] hover:text-[#005BB5] transition duration-300 mx-4"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
