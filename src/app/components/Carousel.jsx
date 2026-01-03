'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Carousel() {
  const items = [
    { src: '/watch1.png', title: 'GEM DIOR' },
    { src: '/watch2.png', title: 'LAD DE DIOR SATIN' },
    { src: '/watch3.png', title: 'LA MINI D DE DIOR SATIN' },
    { src: '/watch1.png', title: 'GEM DIOR' },
    { src: '/watch2.png', title: 'LAD DE DIOR SATIN' },
    { src: '/watch3.png', title: 'LA MINI D DE DIOR SATIN' },
  ]

  return (
    <div className="relative pt-25 w-full max-w-6xl mx-auto px-10">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3} // ALWAYS 3 on all devices
        spaceBetween={20}
        loop
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group  overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <p
                className="
                  w-full py-6 px-5 text-center text-xl font-medium
                  font-['Times_New_Roman',serif]
                  text-black bg-white
                  transition-all duration-300
                  group-hover:text-white
                  group-hover:bg-gradient-to-r
                  group-hover:from-[#f165aa]
                  group-hover:to-[#5493ff]
                "
              >
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT ARROW */}
      {/* LEFT ARROW */}
<button
  className="
    swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-20
    w-11 h-11 rounded-full
    flex items-center justify-center
    text-white
    bg-gradient-to-r from-[#f165aa] to-[#5493ff]
    hover:scale-110 transition
  "
>
  <FaArrowLeftLong className="text-xl" />
</button>

{/* RIGHT ARROW */}
<button
  className="
    swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-20
    w-11 h-11 rounded-full
    flex items-center justify-center
    text-white
    bg-gradient-to-r from-[#f165aa] to-[#5493ff]
    hover:scale-110 transition
  "
>
  <FaArrowRightLong className="text-xl" />
</button>

    </div>
  )
}
