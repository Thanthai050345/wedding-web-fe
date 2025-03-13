import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-1">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Your Wedding Celebration. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
