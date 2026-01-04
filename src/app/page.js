import Image from "next/image";
import Banner from "./components/Banner";
import WhyBuyOurWatches from "./components/WhyBuyOurWatches";
import Features from "./components/Features";
import Carousel from "./components/Carousel";
import VideoSection from "./components/VideoSection";
import KindsOfWatches from "./components/KindsOfWatches";
import Reviews from "./components/Reviews";
import DiscountPage from "./components/DiscountPage";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <WhyBuyOurWatches></WhyBuyOurWatches>
     <Features></Features>
     <Carousel></Carousel>
     <VideoSection></VideoSection>
     <KindsOfWatches></KindsOfWatches>
     <Reviews></Reviews>
     <DiscountPage></DiscountPage>
    </div>
  );
}
