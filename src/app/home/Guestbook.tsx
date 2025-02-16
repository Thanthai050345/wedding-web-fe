"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchGuestbookData } from "@/libs/api";
import { Metadata } from "next";
import ImageModal from "../components/ImageModal";
import { Wish } from "@/models/home/guestbook";
import PostWish from "./PostWish";

export const metadata: Metadata = {
  title: "Guestbook & Wishes | คำอวยพรจากเพื่อนและครอบครัว",
  description:
    "ร่วมส่งคำอวยพรให้เราได้เก็บไว้เป็นความทรงจำ กับ Guestbook & Wishes รวมข้อความจากเพื่อนและครอบครัวในวันสำคัญ",
  openGraph: {
    title: "Guestbook & Wishes | คำอวยพรจากเพื่อนและครอบครัว",
    description:
      "รวมข้อความคำอวยพรจากเพื่อนและครอบครัว ร่วมแบ่งปันความสุขในวันพิเศษ",
    url: "https://yourdomain.com/guestbook",
    images: [
      {
        url: "https://yourdomain.com/images/guestbook-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Guestbook & Wishes Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guestbook & Wishes",
    description:
      "รวมข้อความคำอวยพรจากเพื่อนและครอบครัว ร่วมแบ่งปันความสุขในวันพิเศษ",
    images: ["https://yourdomain.com/images/guestbook-banner.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/guestbook",
  },
};

const Guestbook = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getWishes = async () => {
    const response: Wish[] = await fetchGuestbookData();
    setWishes(response);
  };

  useEffect(() => {
    getWishes();
  }, []);

  const openImageModal = (images: string) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImages(null);
  };

  const handleReadMore = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#f4f4f4] py-16 px-6 font-sans">
      <div className="mx-auto max-w-[600px]">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Guestbook & Wishes
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-12">
            รวมคำอวยพรจากเพื่อนและครอบครัว
          </p>
        </div>

        <div className="space-y-4">
          <PostWish />
          {wishes.map((wish, index) => (
            <div key={wish.id} className="p-6 rounded-lg shadow-md bg-white">
              <div className="flex items-center space-x-4">
                {wish.userImage && (
                  <Image
                    src={wish.userImage}
                    alt={`${wish.userName}'s Profile`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{wish.userName}</h3>
                  <p className="text-sm text-gray-500">{`${wish.date} at ${wish.time}`}</p>
                </div>
              </div>
              <p className="mt-4">
                {wish.message.length > 150
                  ? expandedIndex === index
                    ? wish.message
                    : `${wish.message.slice(0, 150)}...`
                  : wish.message}
              </p>
              {wish.message.length > 150 && (
                <button
                  onClick={() => handleReadMore(index)}
                  className="text-blue-500 text-sm mt-2"
                >
                  {expandedIndex === index ? "อ่านน้อยลง" : "อ่านเพิ่มเติม"}
                </button>
              )}

              {wish.images && (
                <div className="mt-4">
                  {wish.images.length > 0 && (
                    <div
                      className={`grid gap-1 ${
                        wish.images.length === 4
                          ? "grid-flow-col grid-rows-2"
                          : ""
                      } ${
                        wish.images.length === 3
                          ? "grid-cols-2 grid-rows-2"
                          : ""
                      } ${wish.images.length === 2 ? "grid-cols-2" : ""} ${
                        wish.images.length === 1 ? "grid-cols-1" : ""
                      }`}
                    >
                      {wish.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`relative cursor-pointer ${
                            wish.images?.length === 3 && imgIndex === 0
                              ? "col-span-1 row-span-2"
                              : ""
                          }`}
                          onClick={() => openImageModal(image)}
                        >
                          <Image
                            src={image}
                            alt={`Wish Image ${imgIndex + 1}`}
                            width={150}
                            height={150}
                            className={`object-cover w-full aspect-square h-full ${
                              wish.images?.length === 3 && imgIndex === 0
                                ? "h-[260px]"
                                : ""
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <ImageModal
          isOpen={isModalOpen}
          imageSrc={selectedImages}
          onClose={closeImageModal}
        />
      </div>
    </div>
  );
};

export default Guestbook;
