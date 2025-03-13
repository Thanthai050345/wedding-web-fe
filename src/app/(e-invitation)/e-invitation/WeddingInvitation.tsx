"use client";

import Image from "next/image";
import Card from "./card";

export default function WeddingInvitation() {
  return (
    <div className="relative inset-0 min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16 font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wedding3.jpg"
          alt="Wedding Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xl" />
      </div>

      <Card button={true}/>
    </div>
  );
}
