import React from 'react'
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
export default function KindsOfWatches() {
  return (
    <div>
        <div className="relative mt-20  py-20 px-5"
              style={{ backgroundImage: "url('/bg2.png')" }}>
                <h1 className="text-[#d849b2] mb-7 text-center text-5xl font-bold">মূল্যঃ ১৬৫০ টাকা</h1>
                <p className="text-[27px] word-spacing-wide my-5 font-medium text-center text-black">সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</p>
        <div className="flex my-7 justify-center">
          <button className="relative group overflow-hidden
                             flex items-center justify-center
                             px-10 py-3 rounded-lg
                             text-xl font-semibold text-white">
        
            {/* Gradient background */}
            <span className="absolute inset-0
                             bg-gradient-to-r from-[#f165aa] to-[#5493ff]
                             transition-all duration-500 ease-in-out
                             group-hover:from-[#5493ff]
                             
                             group-hover:to-[#f165aa]">
            </span>
        
            {/* Button content */}
            <span className="relative flex items-center gap-x-3">
              <ShoppingCart className="w-8 h-8" />
              অর্ডার করুন
            </span>
          </button>
        </div>
        
            </div>
    </div>
  )
}
