"use client";

import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-100 font-sans">
      <div className="w-full max-w-lg py-8 p-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-[#090909">
          นโยบายการเก็บรวบรวมข้อมูล
        </h1>
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-[#090909] mb-8 md:mb-16">
          (Privacy Policy)
        </h1>
        <p className="text-lg text-gray-600 mb-3">
          อัปเดตล่าสุด: 1 มีนาคม 2568
        </p>

        <p className="mb-6 text-lg">
          เรามุ่งมั่นที่จะปกป้องความเป็นส่วนตัวของคุณ
          ข้อมูลที่คุณให้กับเราจะถูกใช้เพื่อสร้างประสบการณ์ที่ดีที่สุดสำหรับคุณและผู้ร่วมงาน
          โปรดอ่านนโยบายนี้เพื่อทำความเข้าใจว่าข้อมูลของคุณจะถูกใช้และจัดเก็บอย่างไร
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#090909] mb-3">
          1. ข้อมูลที่เราเก็บรวบรวม
        </h2>
        <p className="mb-2 text-lg">
          เราอาจเก็บข้อมูลต่อไปนี้เมื่อคุณใช้งานเว็บไซต์ของเรา
        </p>
        <ul className="list-none pl-6 mb-6">
          <li className="before:content-['–'] text-lg before:text-gray-600 before:mr-2">
            ข้อมูลพื้นฐาน: ชื่อ-นามสกุล, อีเมล, เบอร์โทรศัพท์
          </li>
          <li className="before:content-['–'] text-lg before:text-gray-600 before:mr-2">
            ข้อมูลการตอบรับงานแต่ง (RSVP) เช่น สถานะการเข้าร่วม,
            จำนวนแขกที่มาร่วมงาน
          </li>
          <li className="before:content-['–'] text-lg before:text-gray-600 before:mr-2">
            ข้อความอวยพร: คำอวยพรที่คุณส่งให้คู่บ่าวสาว
          </li>
          <li className="before:content-['–'] text-lg before:text-gray-600 before:mr-2">
            รูปภาพและวิดีโอ: ภาพบรรยากาศที่แขกอัปโหลด
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-[#090909] mb-3">
          2. วัตถุประสงค์ในการใช้ข้อมูล
        </h2>
        <p className="mb-2 text-lg">เราใช้ข้อมูลของคุณเพื่อ</p>
        <ul className="list-none pl-6 mb-6">
          <li className="before:content-['–'] text-lg before:text-gray-600 before:mr-2">
            จัดการรายชื่อแขกและการตอบรับงานแต่ง
          </li>
          <li className="before:content-['–'] text-lg before:text-gray-600 before:mr-2">
            แสดงคำอวยพรและภาพบรรยากาศงานบนเว็บไซต์
          </li>
          <li className="before:content-['–'] text-lg before:text-gray-600 before:mr-2">
            ปรับปรุงประสบการณ์ของผู้ใช้งาน
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-[#090909] mb-3">
          3. การแบ่งปันข้อมูล
        </h2>
        <p className="mb-2 text-lg">
          เราจะไม่ขาย
          หรือให้ข้อมูลของคุณแก่บุคคลภายนอกเพื่อวัตถุประสงค์ทางการตลาด เราจะแชร์ข้อมูลเฉพาะในกรณีที่จำเป็น
          เช่น
        </p>
        <ul className="list-none pl-6 mb-6">
          <li className="before:content-['–'] text-lg before:text-gray-600 before:mr-2">
            ข้อมูลของแขกที่ยืนยันการมาร่วมงาน อาจถูกแชร์กับเจ้าภาพงานแต่ง
          </li>
          <li className="before:content-['–'] text-lg before:text-gray-600 before:mr-2">
            คำอวยพรที่คุณส่ง
            อาจถูกแสดงบนเว็บไซต์เพื่อให้เจ้าบ่าวเจ้าสาวและแขกท่านอื่นเห็น
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-[#090909] mb-2 text-lg">
          4. การเก็บรักษาข้อมูล
        </h2>
        <p className="mb-2 text-lg">
          ข้อมูลของคุณจะถูกเก็บไว้ในระบบของเราตามระยะเวลาที่จำเป็น
          โดยทั่วไปจะไม่เกิน 12 เดือนหลังจบงานแต่ง
          หากคุณต้องการให้เราลบข้อมูลของคุณ สามารถติดต่อเราได้ที่
          [thanthai.j@odds.team]
        </p>

        <Button
          className="w-full mt-8 bg-primary text-white py-3 rounded-lg text-lg hover:bg-primary-dark transition-all duration-200 ease-in-out"
          onClick={() => router.back()}
        >
          อนุญาตให้เก็บรวบรวมข้อมูล
        </Button>
      </div>
    </div>
  );
}
