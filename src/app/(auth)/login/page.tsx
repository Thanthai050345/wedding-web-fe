"use client";

import Image from "next/image";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { SiLine } from "react-icons/si";

const LoginPage = () => {
  const handleSocialLogin = (provider: string) => {
    console.log("Social login with:", provider);
  };

  return (
    <div className="min-h-screen w-full font-sans">
      {/* Mobile layout */}
      <div className="relative lg:hidden">
        <Image
          src="/images/wedding.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 min-h-screen flex flex-col justify-end items-center">
          <div className="m-4 p-6 backdrop-blur-sm bg-primary bg-opacity-50 text-white rounded-lg shadow-lg">
            <p className="text-3xl font-raleway">BANK & KWAN</p>
            <p className="text-sm mt-2">
              ยินดีต้อนรับสู่ช่วงเวลาพิเศษของเรา เข้าสู่ระบบเพื่อส่งคำอวยพร
              และร่วมเป็นส่วนหนึ่งของความรักและความทรงจำดีๆ ไปกับเราสองคนนะคะ 💕
            </p>
          </div>
          <div className="bg-white rounded-t-3xl p-8 shadow-lg w-full">
            <LoginButtons handleSocialLogin={handleSocialLogin} />
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex min-h-screen">
        <div className="w-1/2 relative">
          <Image
            src="/images/wedding.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center bg-white px-8 py-6">
          <div className="w-full max-w-md">
            <div className="bg-primary bg-opacity-50 p-6 text-center rounded-lg shadow-lg mb-8">
              <p className="text-4xl font-raleway text-white">BANK & KWAN</p>
              <p className="text-sm mt-4 text-white">
                ยินดีต้อนรับสู่ช่วงเวลาพิเศษของเรา เข้าสู่ระบบเพื่อส่งคำอวยพร
                และร่วมเป็นส่วนหนึ่งของความรักและความทรงจำดีๆ ไปกับเราสองคนนะคะ
                💕
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <LoginButtons handleSocialLogin={handleSocialLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LoginButtonsProps {
  handleSocialLogin: (provider: string) => void;
}

const LoginButtons = ({ handleSocialLogin }: LoginButtonsProps) => {
  return (
    <div className="space-y-4">
      <button
        onClick={() => handleSocialLogin("facebook")}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#1877F2] text-white rounded-lg hover:bg-[#1864F2] transition-colors"
      >
        <FaFacebook className="text-xl" />
        <span>เข้าสู่ระบบด้วย Facebook</span>
      </button>

      <button
        onClick={() => handleSocialLogin("google")}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <FaGoogle className="text-xl text-red-600" />
        <span>เข้าสู่ระบบด้วย Google</span>
      </button>

      <button
        onClick={() => handleSocialLogin("line")}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#06C755] text-white rounded-lg hover:bg-[#05B54B] transition-colors"
      >
        <SiLine className="text-xl" />
        <span>เข้าสู่ระบบด้วย Line</span>
      </button>
    </div>
  );
};

export default LoginPage;
