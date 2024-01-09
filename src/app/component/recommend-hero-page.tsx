import Image from "next/image"
import cloth from "@/assets/loth.jpeg"
import jacket from "@/assets/jacket.jpeg"
import menjac from "@/assets/menjacket.jpeg"

const RecommendHeroPage = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-3xl font-bold '>We Recommend Our New Arrival</h1>
      <p className='text-md '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi
        unde. Veritatis fuga ratione et reprehenderit quod molestiae, magnam vel
        ut voluptas quas, aliquam illum dolor dolorum voluptatum fugiat
        repellat.
      </p>

      <div className='grid grid-cols-3 gap-2 my-6'>
        <div className='relative'>
          <Image
            src={cloth}
            className='w-fit  h-[350px] object-cover '
            alt='men photo'
          />
          <button className='absolute bottom-5 left-5 px-8 py-2.5 mt-3 bg-white text-black rounded'>
            For Men
          </button>
        </div>
        <div className='relative'>
          <Image
            src={menjac}
            className='w-fit  h-[350px]  object-cover '
            alt='men photo'
          />
          <button className='absolute bottom-5 left-5 px-8 py-2.5 mt-3 bg-white text-black rounded'>
            For Men
          </button>
        </div>
        <div className='relative'>
          <Image
            src={jacket}
            className='w-fit  h-[350px] object-cover '
            alt='men photo'
          />
          <button className='absolute bottom-5 left-5 px-8 py-2.5 mt-3 bg-white text-black rounded'>
            For Men
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecommendHeroPage
