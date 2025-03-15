"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ImageModal from "../../components/ImageModal";
import "./gallery.scss";

const images = [
  { src: "/images/wedding.jpg", alt: "Wedding Image 1" },
  { src: "/images/wedding4.jpg", alt: "Wedding Image 4" },
  { src: "/images/wedding2.jpg", alt: "Wedding Image 2" },
  { src: "/images/wedding5.jpg", alt: "Wedding Image 5" },
  { src: "/images/wedding3.jpg", alt: "Wedding Image 3" },
  { src: "/images/wedding6.jpg", alt: "Wedding Image 6" },
  { src: "/images/wedding7.jpg", alt: "Wedding Image 7" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const speed = 1; // ปรับความเร็วของการเลื่อน

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId: number;

    const scrollGallery = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        // รีเซ็ตการเลื่อนเมื่อถึงครึ่งหนึ่งของ content เพื่อลูปไม่สะดุด
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(scrollGallery);
    };

    animationFrameId = requestAnimationFrame(scrollGallery);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex items-center justify-center bg-[#f4f4f4] py-16 px-6 font-sans min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Gallery
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-12">
          บันทึกความทรงจำของพวกเรา
        </p>

        <div
          ref={carouselRef}
          className="relative overflow-x-auto scrollbar-hide h-[480px] flex items-center"
        >
          <div className="flex space-x-4">
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 group flex items-center justify-center"
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
      </div>
    </div>
  );
};

export default Gallery;
