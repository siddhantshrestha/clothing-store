import Image from "next/image"
import shop from "@/assets/shop.jpeg"

const ShopWithUsHeroPage = () => {
  return (
    <div className='relative my-20  overflow-hidden'>
      <Image
        src={shop}
        alt='Shop Image'
        className=' w-screen h-[400px]  object-cover transition-transform     ease-in-out scale-125 hover:scale-100  hover:duration-1000'
      />
      <div className='absolute bottom-10 left-10'>
        <p className='text-white font-bold text-xl'>Shop With Us</p>
        <p className='text-white font-normal w-[300px] text-md'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum in,
          ducimus molestiae quos vitae vero?
        </p>
        <button className='px-8 py-2.5 mt-3 bg-white text-black rounded-xl '>
          More
        </button>
      </div>
    </div>
  )
}

export default ShopWithUsHeroPage
