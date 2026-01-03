"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Banner() {
  return (
    <section className="w-full min-h-[420px] flex items-center justify-center bg-gradient-to-r from-[#b9c2e8] via-[#d6b8d8] to-[#f0a7c2]  px-6 py-14 ">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white space-y-5">
          <div className="flex pl-5 items-center gap-2">
           <Image
  src="/logo.png"
  alt="logo"
  width={250}      // required placeholder, can be any number
  height={20}     // required placeholder
  
/>

           
          </div>

          <h1 className="text-3xl  font-bold leading-snug">
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
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 px-12 py-5 rounded-lg font-semibold">
              অর্ডার করুন
            </button>

            <span className="bg-white text-pink-500 px-5 py-3 rounded-full font-semibold">
              01894844452
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
      <motion.div
        animate={{ y: [0, -35, 0] }} // moves up 15px and back
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
