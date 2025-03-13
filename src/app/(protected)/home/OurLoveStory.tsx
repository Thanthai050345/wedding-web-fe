"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImageModal from "../../components/ImageModal";

const OurLoveStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="flex items-center justify-center bg-[#f4f4f4] pt-16 px-6 font-sans">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Our Love Story
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-12">
          ความรักของเราจากจุดเริ่มต้นจนถึงวันนี้
        </p>

        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:col-start-2">
            <div
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => openModal("/images/wedding.jpg")}
            >
              <Image
                src="/images/wedding.jpg"
                alt="Love Story Image 1"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
              />
            </div>
            <div
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => openModal("/images/wedding4.jpg")}
            >
              <Image
                src="/images/wedding4.jpg"
                alt="Love Story Image 1"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div
              className="relative group cursor-pointer overflow-hidden h-full"
              onClick={() => openModal("/images/wedding5.jpg")}
            >
              <Image
                src="/images/wedding5.jpg"
                alt="Love Story Image 3"
                width={600}
                height={800}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 w-full flex flex-col justify-center">
          <p className="text-xl sm:text-2xl md:text-3xl w-full max-w-[756px] font-bold text-left text-primary mb-4 mx-auto">
            จุดเริ่มต้นของเรา
          </p>
          <p className="text-lg sm:text-xl md:text-2xl w-full max-w-[756px] text-left mx-auto text-gray-700 leading-relaxed">
            ทุกความรักมีเรื่องราวของมันเอง…
            และเรื่องราวของเราก็เริ่มต้นจากวันธรรมดาวันหนึ่ง
            ที่กลายเป็นวันที่พิเศษที่สุด เมื่อสายตาสองคู่บังเอิญสบกัน
            โลกที่เคยวุ่นวายกลับเงียบสงบในชั่วพริบตา เราเริ่มต้นจากการเป็นเพื่อน
            พูดคุย หัวเราะ และค่อยๆ เติมเต็มกันและกัน
          </p>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
};

export default OurLoveStory;
