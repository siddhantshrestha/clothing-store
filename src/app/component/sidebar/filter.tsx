"use client"

import { useState } from "react"
import InputRange from "react-input-range"
import "react-input-range/lib/css/index.css"
import { PriceFilter } from "./price-filter"

const Filter = () => {
  // const [val, setVal] = useState({ min: 1000, max: 8000 })

  // const handleInputChange = (val: any) => {
  //   setVal(val)
  //   setMinVal(val.min)
  //   setMaxVal(val.max)
  // }
  // const handleMinInputChange = (e: any) => {
  //   if (e.target.value > 10000) return

  //   setMinVal(e.target.value)
  //   setVal(prevState => ({ ...prevState, min: e.target.value }))

  //   // setVal(minVal)
  // }
  // const handleMaxInputChange = (e: any) => {
  //   if (e.target.value > 10000) return

  //   setMaxVal(e.target.value)
  //   setVal(prevState => ({ ...prevState, max: e.target.value }))
  // }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  return (
    <aside className='bg-slate-600 w-[300px] p-4 px-8 min-h-[calc(100vh-20px)]'>
      <div className='mt-8 border-t border-1 p-3'>
        <h1>Category</h1>
        <ul>
          <li>Pant</li>
          <li>Shirt</li>
          <li>Jacket</li>
          <li>Shoes</li>
        </ul>
      </div>
      <div className='mt-8 border-t border-1 p-3 '>
        <h1>sizes</h1>
        <div className='grid gap-2 grid-cols-3'>
          {sizes.map(items => (
            <p
              key={items}
              className='text-semibold text-black p-1 text-center w-[50px] bg-slate-200 rounded-md'>
              {items}
            </p>
          ))}
        </div>
      </div>

      <div className='mt-8 border-t border-1 p-3'>
        <h2>Price</h2>
        <PriceFilter />
      </div>
    </aside>
  )
}

export default Filter
