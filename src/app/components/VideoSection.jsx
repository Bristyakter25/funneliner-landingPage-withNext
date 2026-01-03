import Image from 'next/image'
import React from 'react'

export default function VideoSection() {
  return (
    <div className="relative  mt-20">
      {/* TOP FEATURE SECTION */}
      <div className="py-20 bg-gradient-to-r from-[#80aefc] to-[#f97fbc]">
        <section className="max-w-[950px] mx-auto pb-28 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image src="/shipping.png" alt="shipping" width={85} height={85} />
              <p className="text-white text-xl mt-3">বিশ্বব্যাপী ফ্রি শিপিং।</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src="/purity.png" alt="purity" width={85} height={85} />
              <p className="text-white text-xl mt-3">85 ভাগ খাঁটি</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src="/guarantee.png" alt="guarantee" width={85} height={85} />
              <p className="text-white text-xl mt-3">শ্রেষ্ঠ মূল্য গ্যারান্টি।</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src="/service.png" alt="service" width={85} height={85} />
              <p className="text-white text-xl mt-3">24/7 গ্রাহক সহায়তা</p>
            </div>
          </div>
        </section>
      </div>

      {/* OVERLAPPING VIDEO */}
      <div className="relative -mt-32 mb-16 w-full max-w-[920px] mx-auto">
        <div className="relative h-[400px] w-full aspect-video overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-[400px]"
            src="https://www.youtube.com/embed/uFjU5zFJx3E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
