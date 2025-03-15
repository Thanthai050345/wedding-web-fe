"use client";
import React from "react";
import dynamic from "next/dynamic";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

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
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6 font-sans"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header section with decorative line */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-primary/30"></div>
            <span className="mx-4 text-sm font-medium uppercase tracking-widest text-primary">
              Our Venue
            </span>
            <div className="h-px w-12 bg-primary/30"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-6">
            A Place Every Moment
            <br className="hidden sm:block" /> Becomes a Memory
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 max-w-3xl mx-auto">
            สถานที่จัดงาน สถานที่ที่เราจะสร้างความทรงจำที่ไม่มีวันลืมร่วมกัน
          </p>
        </div>

        {/* Map and info card overlapping layout */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="w-full lg:w-3/5 rounded-2xl shadow-lg overflow-hidden bg-white h-80 sm:h-96">
            <MapComponent />
          </div>

          <div className="w-full lg:w-2/5 bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="flex items-start mb-4">
              <MapPin className="text-primary mr-3 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  ศูนย์ประชุมมารินทร์
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  เลขที่ 65 ซอยผดุงวิถี 8, ตำบลตลาด, อำเภอเมืองมหาสารคาม,
                  จังหวัดมหาสารคาม, ประเทศไทย 44000
                </p>
              </div>
            </div>

            <p className="text-gray-700 italic mb-6 border-l-4 border-primary/20 pl-4">
              เรามีความยินดีที่จะเชิญทุกท่านมาร่วมเป็นสักขีพยานในวันสำคัญของเรา
            </p>
            
            <button
              className="flex items-center justify-center w-full sm:w-auto bg-primary hover:bg-primary-dark text-white py-3 px-5 sm:px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl group"
              aria-label="Open in Google Maps"
              onClick={(e) => {
                e.preventDefault();
                openGoogleMaps();
              }}
              rel="noopener noreferrer"
            >
              <Navigation
                className="mr-2 group-hover:-rotate-12 transition-transform duration-300"
                size={20}
              />
              เปิดใน Google Maps
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapInfo;
