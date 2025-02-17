"use client";
import React from "react";
import dynamic from "next/dynamic";

interface MapInfoProps {
  id: string;
}

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

const MapInfo: React.FC<MapInfoProps> = ({ id }) => {
  const openGoogleMaps = () => {
    const url =
      "https://www.google.com/maps/place/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1/@16.177433,103.2958412,17z/data=!3m1!4b1!4m6!3m5!1s0x3122a6ee881540bb:0xaf02299a3abf9bb4!8m2!3d16.177433!4d103.2984161!16s%2Fg%2F11bxg0gh6c?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D";
    window.open(url, "_blank");
  };

  return (
    <div
      id={id}
      className="flex items-center justify-center bg-[#f4f4f4] py-16 px-6 font-sans"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">
          A Place Every Moment Becomes a Memory
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-12">
          สถานที่จัดงาน สถานที่ที่เราจะสร้างความทรงจำที่ไม่มีวันลืมร่วมกัน
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 px-6">
          เรามีความยินดีที่จะเชิญทุกท่านมาร่วมเป็นสักขีพยานในวันสำคัญของเรา
          <br />
          ที่<strong className="font-bold"> ศูนย์ประชุมมารินทร์ </strong>
          <br />
          เลขที่ 65 ซอยผดุงวิถี 8, ตำบลตลาด, อำเภอเมืองมหาสารคาม,
          จังหวัดมหาสารคาม, ประเทศไทย 44000
        </p>

        <div className="mt-12 mb-3 w-full flex justify-center items-center relative z-0">
          <div className="max-w-[756px] h-[300px] w-full rounded-2xl shadow-xl">
            <MapComponent />
          </div>
        </div>

        <button
          className="bg-primary text-white py-2 px-6 rounded-md w-80 sm:w-96 mt-4 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-lg transform transition duration-200 ease-in-out hover:scale-105"
          aria-label="Details about the wedding event"
          onClick={(e) => {
            e.preventDefault();
            openGoogleMaps();
          }}
          rel="noopener noreferrer"
        >
          เปิดใน Google Maps
        </button>
      </div>
    </div>
  );
};

export default MapInfo;
