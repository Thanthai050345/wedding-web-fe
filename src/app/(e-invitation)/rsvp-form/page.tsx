"use client";

import { useState } from "react";
import {
  Button,
  Field,
  Input,
  Label,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

export default function RSVPForm() {
  const [form, setForm] = useState({
    guests: "",
    firstName: "",
    lastName: "",
    status: "accept",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Form Data:", form);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-100 font-sans text-2xl font-normal">
      <div className="w-full h-full max-w-lg py-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
            แบบฟอร์มยืนยันการตอบรับ
          </h2>

          <div className="space-y-6">
            <Field>
              <Label
                htmlFor="guests"
                className="block font-medium text-gray-700 text-base"
              >
                จำนวนผู้เข้าร่วม
              </Label>
              <Input
                id="guests"
                type="number"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                placeholder="กรุณากรอกจำนวนผู้เข้าร่วม"
                min="1"
                className="text-base mt-2 p-3 rounded-lg w-full h-[52px] focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-base"
              />
            </Field>

            <Field>
              <Label
                htmlFor="firstName"
                className="block text-base font-medium text-gray-700"
              >
                ชื่อจริง
              </Label>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="กรุณากรอกชื่อ"
                className="text-base mt-2 p-3 rounded-lg w-full h-[52px] focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-base"
              />
            </Field>

            <Field>
              <Label
                htmlFor="lastName"
                className="block text-base font-medium text-gray-700"
              >
                นามสกุล
              </Label>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="กรุณากรอกนามสกุล"
                className="text-base mt-2 p-3 rounded-lg w-full h-[52px] focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-base"
              />
            </Field>

            <Field>
              <Label
                htmlFor="status"
                className="block text-base font-medium text-gray-700"
              >
                สถานะการตอบรับ
              </Label>

              <Menu as="div" className="mt-2 relative">
                <MenuButton className="w-full p-3 text-left text-base rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                  {form.status === "accept" ? "เข้าร่วม" : "ไม่สามารถเข้าร่วม"}
                </MenuButton>

                <MenuItems className="absolute mt-1 w-full bg-white rounded-lg shadow-lg">
                  <MenuItem>
                    {() => (
                      <span
                        className="block p-3 cursor-pointer text-base"
                        onClick={() =>
                          setForm((prev) => ({ ...prev, status: "accept" }))
                        }
                      >
                        เข้าร่วม
                      </span>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {() => (
                      <span
                        className="block p-3 cursor-pointer text-base"
                        onClick={() =>
                          setForm((prev) => ({ ...prev, status: "decline" }))
                        }
                      >
                        ไม่สามารถเข้าร่วม
                      </span>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </Field>
          </div>

          <div className="mt-6 text-gray-500 text-base">
            <div className="flex space-x-2">
              <span className="font-medium">นโยบายการเก็บรวบรวมข้อมูล</span>
            </div>
            <div>
              <p className="mt-2 font-light">
                เรามุ่งมั่นที่จะปกป้องความเป็นส่วนตัวของคุณ
                ข้อมูลที่คุณให้กับเรา
                จะถูกใช้เพื่อสร้างประสบการณ์ที่ดีที่สุดสำหรับคุณและผู้ร่วมงาน
                โปรดอ่านนโยบายนี้เพื่อทำความเข้าใจ ว่าข้อมูลของคุณจะถูกใช้
                และจัดเก็บอย่างไร{" "}
                <a href="/privacy-policy" className="text-blue-500 underline">
                  เพิ่มเติม
                </a>
              </p>
            </div>
          </div>
          <Button
            className="w-full mt-8 bg-primary text-white py-3 rounded-lg text-lg hover:bg-primary-dark transition-all duration-200 ease-in-out"
            onClick={handleSave}
          >
            ส่งคำตอบรับ
          </Button>
        </div>
      </div>
    </div>
  );
}
