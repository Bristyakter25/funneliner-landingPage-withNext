"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
export default function Banner() {
  return (
    <section className="relative py-10 px-10 w-full bg-cover "
  style={{ backgroundImage: "url('/bannerBG.png')" }}>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        
        <div className="text-white space-y-5">
          <div className="flex pl-5 items-center gap-2">
           <Image
  src="/logo.png"
  alt="logo"
  width={250}      
  height={20}     
  
/>

           
          </div>

          <h1 className="text-[34px]  font-bold leading-tight">
            আপনার গার্লফ্রেন্ডকে <br />
            মিডিয়াম বাজেটের একটি <br />
            ঘড়ি গিফট করতে চান <br />
            তাহলে আমাদের ঘড়িটি <br />
            খুবই দারুণ
          </h1>
          <div className="flex items-center gap-2">
  <span className="text-xl font-medium text-neutral-800">
   ছিলঃ
  </span>

  <span className="text-xl font-semibold  text-gray-700 line-through">
    ৳১৯৯০
  </span>
</div>

          <p className="text-3xl font-extrabold text-pink-400">মূল্যঃ ১৬৫০ টাকা</p>

          <div className="flex items-center gap-4">
      <button className="relative flex items-center gap-x-3 px-10 py-3 rounded-lg text-xl font-semibold text-white overflow-hidden group">
  {/* Gradient background */}
  <span className="absolute inset-0 
                   bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                   transition-all duration-500 ease-in-out
                   group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500"></span>

 
  <span className="relative flex items-center gap-x-3">
    <ShoppingCart className="w-8 h-8 text-white" />
    অর্ডার করুন
  </span>
</button>


            <span className="bg-white text-pink-500 px-5 py-3 rounded-full font-semibold">
              01894844452
            </span>
          </div>
        </div>

        
        <div className="flex ml-16 justify-center md:justify-end">
      <motion.div
        animate={{ y: [0, -45, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/watches.png"
          alt="Watch Product"
          width={420}
          height={420}
          priority
        />
      </motion.div>
    </div>
      </div>
    </section>
  );
}
