import { Metadata } from "next";
import Carousel from "./Carousel";
import CountdownTimer from "./CountdownTimer";
import WeddingCard from "./WeddingCard";
import OurLoveStory from "./OurLoveStory";
import Gallery from "./Gallery";
// import Guestbook from "./Guestbook";
import WeddingTheme from "./WeddingTheme";
import MapInfo from "./MapInfo";
import Footer from "./Footer";
// import Card from "@/app/(e-invitation)/e-invitation/card";
import WeddingSchedule from "./WeddingSchedule";

export const metadata: Metadata = {
  title: "Join Our Celebration | 15 April 2026",
  description:
    "Let's come to celebrate with us on 15 April 2026. Don't miss out!",
};

export default function Home() {
  return (
    <div className="bg-[#f4f4f4]">
      <Carousel />
      <div className="text-center text-primary my-8 px-6 sm:px-12 md:px-16 font-sans">
        <p className="text-lg sm:text-xl md:text-3xl font-bold tracking-wide text-gray-700">
          Let’s come to
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 text-primary leading-tight">
          Celebrate with us
        </h1>
        <p className="text-xl sm:text-2xl mt-4 text-gray-800">15 - 04 - 2026</p>
        <p className="text-lg sm:text-xl mt-2 text-gray-500">
          (ศูนย์ประชุมมารินทร์ อำเภอเมือง จังหวัดมหาสารคาม)
        </p>
        <div className="mt-3">
          <a href="#map-section" className="text-[#007AFF] text-lg py-2 px-6">
            รายละเอียดสถานที่จัดงาน
          </a>
        </div>

        <div className="flex justify-center items-center mt-3">
          <div className="relative">
            <CountdownTimer />
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-60 rounded-lg"></div>
          </div>
        </div>
      </div>

      <WeddingSchedule />

      {/* <div className="grid justify-items-center">
        <Card home={true}/>
      </div> */}
      <WeddingCard />
      <OurLoveStory />
      <Gallery />
      {/* <Guestbook /> */}
      <WeddingTheme />
      <MapInfo id="map-section" />
      <Footer />
    </div>
  );
}
