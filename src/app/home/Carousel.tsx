import { useState, useEffect, useRef } from "react";

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
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 1s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
          >
            {index === 0 && (
              <div
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="absolute top-1/3 left-1/2 grid gap-8 transform -translate-x-1/2 text-center text-white">
                  <h1 className="text-7xl font-bold mb-4 font-cormorantGaramond">
                    Forever Begins Here A Love Written in the Stars
                  </h1>
                  <div>
                    <h3 className="font-raleway">
                      Two hearts, one journey, bound by love and cherished
                      moments. Join us as we celebrate the beginning of our
                      forever, surrounded by those who mean the most.
                    </h3>
                    <button className="bg-primary-500 text-white py-2 px-4 rounded-full">
                      Learn More
                    </button>
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
              index === currentIndex ? "bg-primary-500" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
