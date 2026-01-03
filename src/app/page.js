import Image from "next/image";
import Banner from "./components/Banner";
import WhyBuyOurWatches from "./components/WhyBuyOurWatches";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <WhyBuyOurWatches></WhyBuyOurWatches>
    </div>
  );
}
