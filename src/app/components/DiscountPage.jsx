"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function DiscountPage() {
  return (
    <section className="relative w-screen min-h-[500px] overflow-hidden flex items-center justify-center">
      
      {/* LEFT IMAGE */}
      <div className="absolute left-0 z-10">
        <motion.div
          animate={{ y: [0, -45, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/hand1.png"
            alt="Left Hand"
            width={320}
            height={320}
            priority
          />
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-0 z-10">
        <motion.div
          animate={{ y: [0, 45, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/hand2.png"
            alt="Right Hand"
            width={320}
            height={320}
            priority
          />
        </motion.div>
      </div>

      {/* MIDDLE OVERLAY SECTION */}
      <div
        className="relative mb-10 z-20 w-[750px] h-[600px] bg-cover bg-center flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/bg4.png')" }}
      >
       
       

        {/* TEXT */}
        <div className="relative z-10 mt-18 mb-10 text-white">
          <h2 className="text-5xl mt-52 font-bold mb-16">
            মূল্যঃ ১৬৫০ টাকা
          </h2>
          <h1 className="relative  flex w-[200px] mx-auto text-white text-center mb-4">
  {/* 50 */}
  <span className="block text-8xl font-extrabold leading-none">
    50
  </span>

  {/* % */}
  <span className="block text-3xl font-bold -mt-2">
    %
  </span>

  {/* OFF */}
  <span className="block font-['Times_New_Roman',serif] mt-10 text-4xl font-semibold tracking-wide">
    OFF
  </span>
</h1>


          <p className="text-xl w-[350px] mx-auto mt-10 mb-14">
            সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।
          </p>

          {/* BUTTON OVER BG */}
          <a href="#order">
            <button className="px-12 py-5 bg-gradient-to-r from-[#f165aa] to-[#5493ff] text-xl text-white font-semibold rounded-2xl hover:scale-105 transition">
           <span className="relative flex items-center gap-x-3">
              <ShoppingCart className="w-8 h-8" />
              অর্ডার করুন
            </span>
          </button>
          </a>
        </div>
      </div>

    </section>
  );
}
