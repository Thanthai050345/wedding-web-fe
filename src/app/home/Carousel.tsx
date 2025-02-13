"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "/images/wedding.jpg",
  "/images/wedding.jpg",
  "/images/wedding.jpg",
  "/images/wedding.jpg",
  "/images/wedding.jpg",
  "/images/wedding.jpg",
  "/images/wedding.jpg",
  "/images/wedding.jpg",
  "/images/wedding.jpg",
  "/images/wedding.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 1s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25),0_1px_2px_rgba(0,0,0,0.3)]">
      <div
        ref={carouselRef}
        className="flex w-full h-full"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden={index !== currentIndex}
          >
            {index === 0 && (
              <div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="absolute top-1/4 left-1/2 grid gap-10 transform -translate-x-1/2 text-center text-white">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-cormorantGaramond">
                    Forever Begins Here A Love Written in the Stars
                  </h1>
                  <div className="grid gap-6 sm:gap-8">
                    <h3 className="text-lg sm:text-xl font-raleway">
                      Two hearts, one journey, bound by love and cherished
                      moments. Join us as we celebrate the beginning of our
                      forever, surrounded by those who mean the most.
                    </h3>
                    <div className="flex justify-center font-sans">
                      <button
                        className="bg-primary text-white py-2 px-6 rounded-md w-80 sm:w-96 mt-4 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-lg transform transition duration-200 ease-in-out hover:scale-105"
                        aria-label="Details about the wedding event"
                      >
                        รายละเอียดงานแต่ง
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-300 bg-opacity-50 backdrop-blur-md"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
