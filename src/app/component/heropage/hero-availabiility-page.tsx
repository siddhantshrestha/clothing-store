import Image from "next/image"
import men from "@/assets/img1.png"

const HeroAvailablePage = () => {

  const image=[men,men,men]

  return (
    <div className='mt-8'>
      <h1 className='text-3xl font-bold '>Available for</h1>
      <p className='text-md '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi
        unde. Veritatis fuga ratione et reprehenderit quod molestiae, magnam vel
        ut voluptas quas, aliquam illum dolor dolorum voluptatum fugiat
        repellat.
      </p>

      <div className='grid grid-cols-1  gap-4 my-6 md:grid-cols-3 md:gap-2 '>
        {image.map((item, index) => (
          <div className='flex justify-center' key={index}>
            <div className='relative  bg-red-500'>
              <Image
                src={item}
                className='w-fit  h-[350px] object-cover '
                alt='men photo'
              />
              <button className='absolute bottom-5 left-5 px-8 py-2.5 mt-3 bg-white text-black rounded'>
                For Men
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className='grid grid-cols-1  gap-2 my-6 md:grid-cols-2 lg:grid-cols-4'>
        <div>

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
        <div className='relative'>
          <Image src={men} className='w-fit  h-[350px]  ' alt='men photo' />
          <button className='absolute bottom-5 left-5 px-8 py-2.5 mt-3 bg-white text-black rounded'>
            For Men
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default HeroAvailablePage
