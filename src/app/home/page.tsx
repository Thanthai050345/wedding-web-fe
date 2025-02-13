import { Metadata } from "next";
import Carousel from "./Carousel";
import CountdownTimer from "./CountdownTimer";
import WeddingCard from "./WeddingCard";
import OurLoveStory from "./OurLoveStory";
import Gallery from "./Gallery";
import Guestbook from "./Guestbook";

export const metadata: Metadata = {
  title: "Join Our Celebration | 15 April 2026",
  description:
    "Let's come to celebrate with us on 15 April 2026. Don't miss out!",
};

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="text-center text-primary my-8 px-6 sm:px-12 md:px-16">
        <p className="text-lg sm:text-xl md:text-3xl font-bold font-sans tracking-wide text-gray-700">
          Let’s come to
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 text-primary leading-tight">
          Celebrate with us
        </h1>
        <p className="text-xl sm:text-2xl mt-4 text-gray-800">15 - 04 - 2026</p>
        <p className="text-lg sm:text-xl mt-2 text-gray-500">(สถานที่จัดงาน)</p>

        <div className="flex justify-center items-center">
          <div className="relative">
            <CountdownTimer />
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-60 rounded-lg"></div>
          </div>
        </div>
      </div>

      <WeddingCard />
      <OurLoveStory />
      <Gallery />
      <Guestbook />
    </div>
  );
}
