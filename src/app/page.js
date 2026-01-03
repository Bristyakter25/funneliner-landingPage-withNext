import Image from "next/image";
import Banner from "./components/Banner";
import WhyBuyOurWatches from "./components/WhyBuyOurWatches";
import Features from "./components/Features";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <WhyBuyOurWatches></WhyBuyOurWatches>
     <Features></Features>
    </div>
  );
}
