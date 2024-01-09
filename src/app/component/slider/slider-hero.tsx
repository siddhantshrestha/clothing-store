"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import Image from "next/image"
import cloth from "@/assets/loth.jpeg"
import jacket from "@/assets/jacket.jpeg"
import menjac from "@/assets/menjacket.jpeg"

const CustomScrollSwiper = () => {
  const image = [cloth, jacket, menjac, cloth]

  return (
    <Swiper
      className='mt-10'
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      loop={true}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}>
      <div className='flex gap-2 justify-between my-6 '>
        {image.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='relative '>
              <Image
                src={item}
                className='w-fit  h-[350px] object-cover '
                alt='men photo'
              />
              <button className='absolute bottom-5 left-5 px-8 py-2.5 mt-3 bg-white text-black rounded'>
                For Men
              </button>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}

export default CustomScrollSwiper
