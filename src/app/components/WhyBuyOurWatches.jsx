import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
export default function WhyBuyOurWatches() {
  return (
    <div className="mt-16">
        <div
      className="relative bg-cover  bg-center py-20 " 
    >
     
      <h2 className="text-center text-3xl  font-bold text-transparent bg-clip-text 
               bg-gradient-to-r from-[#f165aa]  via-[#944df8] to-[#5493ff] py-5">
  আমাদের YAZOLE ঘড়ি গুলো কেন নিবেন আপনারা
</h2>

<div className="items-center flex justify-center">
    <Image
          src="/line.png"
          alt="line"
          width={150}
          height={80}
        />
</div>
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
      
        <p className=" w-[760px] mt-5 mx-auto text-center  text-neutral-500 text-[22px] leading-6">
          আমরা চীনের শীর্ষস্থানীয় ফ্যাশন মহিলা ঘড়ি নির্মাতারা এবং সরবরাহকারীদের একজন হিসাবে সুপরিচিত। 
          আমাদের কারখানাটি প্রতিযোগিতামূলক দামের সাথে চীনায় তৈরি কাস্টমাইজড ফ্যাশন মহিলাদের ঘড়ি সরবরাহ করে। 
          পাইকারি পরিষেবার জন্য আমাদের সাথে যোগাযোগ করতে স্বাগতম। লেডিস ঘড়ি ডিজাইন আপনি যদি আপনার গার্লফ্রেন্ডকে 
          মিডিয়াম বাজেটের একটি ঘড়ি গিফট করতে চান তাহলে আমাদের ঘড়িটি খুবই দারুণ। অত্যন্ত সাশ্রয়ী দামে এই ঘড়িটি 
          আপনি কিন্তু আপনার ঘড়িটি আপনার গার্লফ্রেন্ডকে গিফট করতে পারেন। ঘড়িটি মহিলাদের জন্য পুরোপুরি মানানসই। 
          ঘড়ির কেস স্টেইনলেস স্টিলের তৈরি। ঘড়িটির পুরুত্ব এবং ব্যাস মানক। ঘড়িটি আধুনিক নারীদের জন্য তৈরি করা হয়েছে 
          যারা ভদ্রতা এবং ইলানের সাথে ভূমিকা অতিক্রম করে।
        </p>
      </div>
      
    </div>
    <div className="relative  py-20 px-5"
      style={{ backgroundImage: "url('/bg image.png')" }}>
        <h1 className="text-[#d849b2] mb-7 text-center text-4xl font-bold">মূল্যঃ ১৬৫০ টাকা</h1>
        <p className="text-xl my-5 font-medium text-center text-black">সরাসরি অর্ডার করতে পারেন আমাদের অনলাইন শপ থেকে।</p>
<div className="flex my-7 justify-center">
  <button className="relative group overflow-hidden
                     flex items-center justify-center
                     px-10 py-3 rounded-lg
                     text-xl font-semibold text-white">

    {/* Gradient background */}
    <span className="absolute inset-0
                     bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                     transition-all duration-500 ease-in-out
                     group-hover:from-blue-500
                     group-hover:via-purple-500
                     group-hover:to-pink-500">
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
  );
}
