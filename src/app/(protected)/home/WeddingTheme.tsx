const weddingThemeInfo = {
  label: "ธีมการแต่งตัวงานแต่งงาน: Luxury Chic",
  description:
    "สำหรับงานแต่งงานของเรา เราขอให้แขกทุกท่านแต่งตัวในลักษณะหรูหราและทันสมัยที่สุด ตามธีมสีที่เราเลือกไว้.",
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

const WeddingTheme: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat py-12 px-6 font-sans"
      style={{
        backgroundImage: "url(/images/rose_2.jpg)",
      }}
    >
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          Color and Theme
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-white mb-12">
          เลือกสีที่เหมาะสมที่สุดในการแต่งตัวของคุณ
        </p>

        <div className="flex justify-center">
          <div className="flex flex-col gap-0 mt-5">
            {weddingThemeInfo.colors.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color.code }}
                className="w-[200px] flex items-center justify-center text-white text-lg font-semibold py-4 w-full sm:w-[300px] mx-auto"
              >
                <div>
                  <p>{color.name}</p>
                  <p>{color.code}</p>
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
