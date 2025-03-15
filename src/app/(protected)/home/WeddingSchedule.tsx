import React from "react";

const WeddingSchedule = () => {
  return (
    <div className="flex items-center justify-center bg-[#f4f4f4] pt-16 px-6 font-sans">
      <div className="bg-gradient-to-b from-gray-50 to-white p-4 md:p-8 rounded-xl shadow-lg max-w-2xl mx-auto my-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            กำหนดการงานแต่ง
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 md:w-32 bg-indigo-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid gap-3 md:gap-4">
          {[
            { time: "08:00", event: "แห่ขันหมาก", note: "" },
            { time: "08:30", event: "สู่ขอ", note: "" },
            { time: "09:00", event: "สู่ขวัญ", note: "" },
            { time: "10:00", event: "ผูกแขน", note: "(เปิดเพลง)" },
            { time: "10:30", event: "เดินขอบคุณแขก", note: "(เปิดเพลง)" },
            { time: "11:00", event: "เริ่มงานเลี้ยง", note: "(ชงร้อง)" },
            { time: "11:30", event: "เปิดตัวบ่าวสาว", note: "(ชงร้อง)" },
            { time: "11:40", event: "พ่อ, แม่ บ่าวสาวกล่าวอวยพร", note: "" },
            { time: "12:00", event: "เพื่อนบ่าวสาวอวยพร", note: "" },
            {
              time: "12:30",
              event: "บ่าวสาว กล่าวความรู้สึก ขอบคุณแขก",
              note: "",
            },
            { time: "12:40", event: "โยนดอกไม้", note: "" },
            { time: "13:00", event: "ดนตรีเริ่ม", note: "" },
            { time: "14:00", event: "งานเลิก", note: "" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center p-3 md:p-4 rounded-lg bg-white border-l-4 border-indigo-500 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg bg-indigo-50 flex items-center justify-center">
                <span className="text-indigo-800 font-bold text-sm md:text-base">
                  {item.time}
                </span>
              </div>
              <div className="ml-3 md:ml-6">
                <p className="text-base md:text-lg font-medium text-gray-800">
                  {item.event}
                </p>
                {item.note && (
                  <p className="text-xs md:text-sm text-gray-500">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 text-center">
          <div className="inline-flex items-center justify-center space-x-1 text-gray-400 text-xs md:text-sm">
            <span>เรียบเรียงโดย</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span>คุณเจ้าบ่าวและเจ้าสาว</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingSchedule;
