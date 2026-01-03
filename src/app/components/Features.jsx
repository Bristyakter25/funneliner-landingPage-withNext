import React from 'react'
import Image from "next/image";
export default function Features() {
  return (
    <div className=' mt-20'>
        <div className='grid grid-cols-2 '>
            <div className='w-[480px] ml-10'>
                <div>
                    <h1 className="text-[34px] py-3 font-bold
               text-transparent bg-clip-text
               bg-gradient-to-r
               from-[#f165aa] to-[#5493ff]">
  ঘড়িটির ফীচার গুলো !
</h1>
                    <Image
                      src="/line2.png"
                      alt="line"
                      width={130}      
                      height={20}
                      className='mb-8'     
                      
                    />
                </div>

                <ul className="space-y-4">
  <li className="flex items-center gap-x-3">
    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
    <span className="text-[#bb4f9a] font-medium text-2xl">
      পানি সহ্য করার ক্ষমতা ৩ বার করতে পারবে
    </span>
  </li>

  <li className="flex items-center gap-x-3">
    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
    <span className="text-[#bb4f9a] font-medium text-2xl">
      চামড়া ব্যান্ড উপাদান & স্টেইনলেস স্টিলের তৈরি
    </span>
  </li>

  <li className="flex items-center gap-x-3">
    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
    <span className="text-[#bb4f9a] font-medium text-2xl">
      কালো সাদা লাল বাদামী রঙ এই ঘড়ি গুলো
    </span>
  </li>

  <li className="flex items-center gap-x-3">
    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
    <span className="text-[#bb4f9a] font-medium text-2xl">
      দৈর্ঘ্য 24 সেমি
    </span>
  </li>

  <li className="flex items-center gap-x-3">
    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
    <span className="text-[#bb4f9a] font-medium text-2xl">
      ঘড়িগুলি 30M ওয়াটারপ্রুফ
    </span>
  </li>

  <li className="flex items-center gap-x-3">
    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
    <span className="text-[#bb4f9a] font-medium text-2xl">
      অ্যান্টি-গ্লায়ার স্যাফায়ার ক্রিস্টাল
    </span>
  </li>

  <li className="flex items-center gap-x-3">
    <Image src="/tick mark.png" alt="tick" width={35} height={35} />
    <span className="text-[#bb4f9a] font-medium text-2xl">
      দুই বছরের ওয়ারেন্টি
    </span>
  </li>
</ul>


            </div>
            <div className='ml-12 w-[400px]'>
                <div className="mt-4  flex flex-col items-center text-center">
  
  <Image
    src="/watch.png"
    alt="watch"
    width={400}
    height={400}
  />

  <p className="w-full py-6 px-5 text-2xl font-medium text-white
                font-['Times_New_Roman',serif]
                bg-gradient-to-r from-[#f165aa] to-[#5493ff]">
    DIOR BLACK ULTRAMATTE
  </p>

</div>

            </div>

        </div>
    </div>
  )
}
