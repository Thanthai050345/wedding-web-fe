import { Metadata } from "next";
import Carousel from "./Carousel";
import CountdownTimer from "./CountdownTimer";
import WeddingCard from "./WeddingCard";
import OurLoveStory from "./OurLoveStory";
import Gallery from "./Gallery";

export const metadata: Metadata = {
  title: "Join Our Celebration | 15 April 2026",
  description:
    "Let's come to celebrate with us on 15 April 2026. Don't miss out!",
};

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="text-center text-primary m-8">
        <p className="text-lg sm:text-xl md:text-3xl font-bold font-sans">
          Let’s come to
        </p>
        <h1 className="text-lg sm:text-xl md:text-3xl font-extrabold mt-2 font-sans">
          Celebrate with us
        </h1>
        <p className="text-xl sm:text-2xl mt-4">15 - 04 - 2026</p>
        <p className="text-lg sm:text-xl mt-2">(สถานที่จัดงาน)</p>
        <CountdownTimer />
      </div>
      <WeddingCard />
      <OurLoveStory />
      <Gallery />
    </div>
  );
}
