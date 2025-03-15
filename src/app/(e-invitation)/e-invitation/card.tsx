"use client";

import Image from "next/image";
import { Heart, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function Card(props: { button?: boolean; home?: boolean }) {
  const router = useRouter();
  return (
    <div
      className={`relative z-10 bg-white/90 backdrop-blur-md ${
        props.home ? "" : "shadow-xl"
      } rounded-2xl p-6 sm:p-8 md:p-10 max-w-lg w-full transform transition-all`}
    >
      <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-xl group">
        <Image
          src="/images/16-9-wedding-5.svg"
          alt="Wedding decoration"
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="text-center mt-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          เรียนเชิญร่วมงานมงคลสมรส
        </h1>
        <div className="flex items-center justify-center mt-3 space-x-3">
          <h2 className="text-xl text-gray-700">คุณวรเมธ</h2>
          <Heart className="text-pink-400 w-6 h-6" />
          <h2 className="text-xl text-gray-700">คุณเทพปรียา</h2>
        </div>
      </div>

      <div className="mt-6 space-y-4 mb-4">
        <div className="flex items-center justify-center space-x-2">
          <Calendar className="text-stone-500 w-5 h-5" />
          <p className="text-gray-700 text-lg">วันอังคารที่ 15 เมษายน 2568</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Clock className="text-stone-500 w-5 h-5" />
          <p className="text-gray-700 text-lg">
            พิธีเช้า: 08:00 น. | งานเลี้ยง: 11:00 น.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <MapPin className="text-stone-500 w-5 h-5" />
          <p className="text-gray-700 text-lg">
            ศูนย์ประชุมมารินทร์, มหาสารคาม
          </p>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>กรุณาตอบรับภายในวันที่ 10 เมษายน 2568</p>
        <p>สอบถามข้อมูลเพิ่มเติม: 095-198-1532</p>
      </div>

      {props.button && (
        <Button
          className="w-full mt-8 bg-primary text-white py-3 rounded-lg text-lg hover:bg-pink-500 transition-all duration-200 ease-in-out"
          onClick={() => router.push("/home")}
        >
          เข้าชมเว็บไซต์
        </Button>
      )}
    </div>
  );
}
