"use client";
import React from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageSrc,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg overflow-hidden w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 max-w-md m-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageSrc!}
          alt="Selected Image"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          className="w-full h-auto object-contain"
        />
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
