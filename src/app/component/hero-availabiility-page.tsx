import Image from "next/image"
import men from "@/assets/img1.png"

const HeroAvailablePage = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-3xl font-bold '>Available for</h1>
      <p className='text-md '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi
        unde. Veritatis fuga ratione et reprehenderit quod molestiae, magnam vel
        ut voluptas quas, aliquam illum dolor dolorum voluptatum fugiat
        repellat.
      </p>

      <div className='grid grid-cols-3 gap-2 my-6'>
        <div className='relative'>
          <Image src={men} className='w-fit  h-[350px]  ' alt='men photo' />
          <button className='absolute bottom-5 left-5 px-8 py-2.5 mt-3 bg-white text-black rounded'>
            For Men
          </button>
        </div>
        <div className='relative'>
          <Image src={men} className='w-fit  h-[350px]  ' alt='men photo' />
          <button className='absolute bottom-5 left-5 px-8 py-2.5 mt-3 bg-white text-black rounded'>
            For Men
          </button>
        </div>
        <div className='relative'>
          <Image src={men} className='w-fit  h-[350px]  ' alt='men photo' />
          <button className='absolute bottom-5 left-5 px-8 py-2.5 mt-3 bg-white text-black rounded'>
            For Men
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroAvailablePage
