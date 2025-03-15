import React from "react";

const weddingThemeInfo = {
  label: "ธีมการแต่งตัวงานแต่งงาน: Elegant Chic",
  description:
    "สำหรับงานแต่งงานของเรา เราขอให้แขกทุกท่านแต่งตัวในลักษณะตามธีมสีที่เราเลือกไว้",
  colors: [
    { name: "Soft Yellow", code: "#F2DBA7" },
    { name: "Warm Orange", code: "#F8A76E" },
    { name: "Light Olive", code: "#B7A982" },
    { name: "Soft Sky Blue", code: "#A9CFD8" },
    { name: "Lavender Purple", code: "#9187BC" },
    { name: "Soft Pink", code: "#E3769D" },
    { name: "Deep Red", code: "#AD414E" },
  ],
};

const WeddingTheme = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6 font-sans min-h-[600px]"
      style={{
        backgroundImage: "url(/images/rose_2.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto text-center max-w-6xl backdrop-blur-sm bg-black/30 rounded-xl p-6 sm:p-8 md:p-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          Color and Theme
        </h2>
        <p className="text-xl sm:text-2xl font-normal text-white mb-8">
          เลือกสีที่เหมาะสมที่สุดในการแต่งตัวของคุณ
        </p>

        <div className="mt-6 mx-auto max-w-lg">
          <div className="p-4 backdrop-blur-sm bg-white/10 rounded-lg mb-6">
            <h3 className="text-white text-xl font-semibold mb-2">
              {weddingThemeInfo.label}
            </h3>
            <p className="text-white text-sm md:text-base">
              {weddingThemeInfo.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3 sm:gap-4">
            {weddingThemeInfo.colors.map((color, index) => (
              <div
                key={index}
                className="group relative transition-all duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden"
              >
                <div
                  style={{ backgroundColor: color.code }}
                  className="aspect-square w-full"
                ></div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm py-2 px-2 text-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium">{color.name}</p>
                  <p className="text-white/80 text-xs">{color.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingTheme;
