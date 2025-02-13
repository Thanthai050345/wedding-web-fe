"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/images/wedding.jpg", alt: "Wedding Image 1" },
  { src: "/images/wedding2.jpg", alt: "Wedding Image 2" },
  { src: "/images/wedding.jpg", alt: "Wedding Image 3" },
  { src: "/images/wedding2.jpg", alt: "Wedding Image 4" },
  { src: "/images/wedding.jpg", alt: "Wedding Image 5" },
];

const Gallery = () => {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX - carouselRef.current!.offsetLeft;
    scrollLeft.current = carouselRef.current!.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX.current) * 3;
    carouselRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="flex items-center justify-center bg-[#f4f4f4] py-16 px-6 font-sans">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Gallery
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-12">
          บันทึกความทรงจำของพวกเรา
        </p>

        <div
          ref={carouselRef}
          className="relative overflow-x-auto scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex space-x-4">
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 content-center">
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <button className="text-[#007AFF] text-lg py-2 px-6 rounded-lg hover:bg-opacity-80 transition duration-300">
            เพิ่มเติม
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
