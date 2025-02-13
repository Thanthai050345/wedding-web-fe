"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ImageModal from "../components/ImageModal";
import './gallery.scss';

const images = [
  { src: "/images/wedding.jpg", alt: "Wedding Image 1" },
  { src: "/images/wedding2.jpg", alt: "Wedding Image 2" },
  { src: "/images/wedding.jpg", alt: "Wedding Image 3" },
  { src: "/images/wedding2.jpg", alt: "Wedding Image 4" },
  { src: "/images/wedding.jpg", alt: "Wedding Image 5" },
  { src: "/images/wedding2.jpg", alt: "Wedding Image 4" },
];

const Gallery = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft === maxScrollLeft) {
        carousel.style.transition = "transform 0.3s ease";
        carousel.scrollLeft = carousel.clientWidth;
      }

      if (carousel.scrollLeft === 0) {
        carousel.style.transition = "transform 0.3s ease";
        carousel.scrollLeft = maxScrollLeft;
      }
    };

    carousel.addEventListener("scroll", handleScroll);

    return () => {
      if (carousel) carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center bg-[#f4f4f4] pt-16 px-6 font-sans">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Gallery
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-12">
          บันทึกความทรงจำของพวกเรา
        </p>

        <div
          ref={carouselRef}
          className="relative overflow-x-auto scrollbar-hide h-[480px]"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex space-x-4">
            {[...images, ...images, ...images].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 group content-center"
              >
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => handleImageClick(image.src)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <ImageModal
          isOpen={!!selectedImage}
          imageSrc={selectedImage}
          onClose={closeModal}
        />

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
