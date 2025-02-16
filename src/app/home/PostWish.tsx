"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaFileImage, FaTimes } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

const PostWish = () => {
  const [message, setMessage] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);
    const newImages = [...images, ...files].slice(-4);

    setImages(newImages);
    setPreviewImages(newImages.map((file) => URL.createObjectURL(file)));
  };

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviewImages(newImages.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Post Submitted", { message, images });
    setMessage("");
    setImages([]);
    setPreviewImages([]);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rounded-lg shadow-md bg-white p-4 w-full mx-auto grid gap-3 font-sans">
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src="https://i.pravatar.cc"
          alt="User Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <textarea
          className="w-full border-none focus:ring-0 resize-none text-gray-700 p-3 bg-gray-100 rounded-full indent-2"
          rows={1}
          placeholder="รวมส่งคำอวยพร"
          value={message}
          readOnly
        />
      </div>

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50"
      >
        <div className="bg-white p-6 font-sans rounded-lg shadow-lg max-w-[500px] w-full relative m-5 flex flex-col gap-3">
          <button
            className="absolute top-3 right-3 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full p-2"
            onClick={handleCloseModal}
            aria-label="Close"
          >
            <FaTimes size={24} className="text-gray-600" />
          </button>

          <div className="flex items-center gap-2">
            <Image
              src="https://i.pravatar.cc"
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-lg font-semibold text-gray-800">
              Thanthai Jitprathum
            </p>
          </div>

          <textarea
            className="w-full focus:outline-none resize-none"
            rows={3}
            placeholder="รวมส่งคำอวยพร..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              minHeight: "1em",
              maxHeight: "12em",
              overflow: "hidden",
              height: "auto",
            }}
          />

          {previewImages.length > 0 && (
            <div className="mt-4">
              <div className="grid grid-cols-1 gap-1 max-h-[200px] overflow-y-auto">
                {previewImages.length > 0 && (
                  <div
                    className={`grid gap-1 ${
                      previewImages.length === 4
                        ? "grid-flow-col grid-rows-2"
                        : ""
                    } ${
                      previewImages.length === 3
                        ? "grid-cols-2 grid-rows-2"
                        : ""
                    } ${previewImages.length === 2 ? "grid-cols-2" : ""} ${
                      previewImages.length === 1 ? "grid-cols-1" : ""
                    }`}
                  >
                    {previewImages.map((src, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative cursor-pointer ${
                          previewImages.length === 3 && imgIndex === 0
                            ? "col-span-1 row-span-2"
                            : ""
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`Preview Image ${imgIndex + 1}`}
                          width={previewImages.length === 1 ? 150 : 150}
                          height={previewImages.length === 1 ? 150 : 150}
                          className={`object-cover w-full aspect-square h-full ${
                            previewImages.length === 3 && imgIndex === 0
                              ? "h-[260px]"
                              : ""
                          }`}
                        />
                        <button
                          className="absolute top-0 right-0 bg-black bg-opacity-50 rounded-full p-1 text-white"
                          onClick={() => handleRemoveImage(imgIndex)}
                        >
                          <FaTimes size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between p-5 border rounded-lg bg-white border-gray-300 shadow-sm">
            <div>
              <p className="text-gray-700 font-semibold">
                เพิ่มลงในโพสต์ของคุณ
              </p>
              <p>(สูงสุด 4 รูป)</p>
            </div>
            <label className="flex items-center space-x-2 cursor-pointer text-green-500 hover:text-green-600">
              <FaFileImage
                size={24}
                className="sm:inline-block md:inline-block lg:inline-block"
              />
              <span className="hidden sm:inline-block text-sm font-medium">
                เพิ่มรูปภาพ
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <div>
            <button
              className="bg-primary w-full text-white px-4 py-2 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-md"
              disabled={!message && images.length === 0}
              onClick={handleSubmit}
              title={
                !message && images.length === 0
                  ? "กรอกข้อความหรือเพิ่มรูปภาพก่อนโพสต์"
                  : ""
              }
            >
              โพสต์
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default PostWish;
