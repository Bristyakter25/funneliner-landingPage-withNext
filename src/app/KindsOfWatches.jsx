import React from 'react'
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
export default function KindsOfWatches() {
  return (
    <div>
        <div className="relative mt-20  py-20 px-5"
              style={{ backgroundImage: "url('/bg2.png')" }}>
                <h1 className="text-[#d849b2] mb-7 text-center text-5xl font-bold">মূল্যঃ ১৬৫০ টাকা</h1>
                <p className="text-[27px] word-spacing-wide my-5 font-extralight text-center text-black">সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</p>
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

            <section className="relative mt-10  py-20 px-5"
              style={{ backgroundImage: "url('/bg3.png')" }}>
               <h2 className="text-center text-3xl  font-bold text-transparent bg-clip-text 
               bg-gradient-to-r
               from-[#f165aa] to-[#5493ff] py-3">বিভিন্ন ধরণের সাশ্রয়ী মূল্যে ঘড়ি গুলোর ধরন</h2>
               <div className="items-center mb-10 flex justify-center">
                   <Image
                         src="/line.png"
                         alt="line"
                         width={150}
                         height={80}
                       />
               </div>
               <div className='grid grid-cols-3'>
                <ul className="space-y-5">
                  <li className="flex items-center gap-x-3">
                    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
                    <span className="text-[#bb4f9a] font-extralight text-2xl">
                     স্মার্ট ওয়াচ
                    </span>
                  </li>
                
                  <li className="flex items-center gap-x-3">
                    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
                    <span className="text-[#bb4f9a] font-extralight text-2xl">
                      ওভাল ডায়াল মহিলাদের ঘড়ি
                    </span>
                  </li>
                
                  <li className="flex items-center gap-x-3">
                    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
                    <span className="text-[#bb4f9a] font-extralight text-2xl">
                      ফ্যাশন কাপল ওয়াচ
                    </span>
                  </li>
                  </ul>
                <ul className="space-y-5">
                  <li className="flex items-center gap-x-3">
                    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
                    <span className="text-[#bb4f9a] font-extralight text-2xl">
                      মাল্টিকালার স্ট্র্যাপ ঘড়ি
                    </span>
                  </li>
                
                  <li className="flex items-center gap-x-3">
                    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
                    <span className="text-[#bb4f9a] font-extralight text-2xl">
                     বিজনেস উইমেন ওয়াচ
                    </span>
                  </li>
                
                  <li className="flex items-center gap-x-3">
                    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
                    <span className="text-[#bb4f9a] font-extralight text-2xl">
                     প্রাইভেট লেবেল উইমেন ওয়াচ
                    </span>
                  </li>
                  </ul>
                <ul className="space-y-5">
                  <li className="flex items-center gap-x-3">
                    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
                    <span className="text-[#bb4f9a] font-extralight text-2xl">
                      ডায়মন্ড কোয়ার্টজ মুভমেন্ট ঘড়ি
                    </span>
                  </li>
                
                  <li className="flex items-center gap-x-3">
                    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
                    <span className="text-[#bb4f9a] font-extralight text-2xl">
                      স্টেইনলেস স্টিল কাপল ওয়াচ
                    </span>
                  </li>
                
                  <li className="flex items-center gap-x-3">
                    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
                    <span className="text-[#bb4f9a] font-extralight text-2xl">
                     পকেট ওয়াচ এবং নার্স ওয়াচ
                    </span>
                  </li>
                  </ul>


               </div>
            </section>
    </div>
  )
}
