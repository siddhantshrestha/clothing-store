import { useState } from "react"
import RangeSlider from "react-range-slider-input"

import "react-range-slider-input/dist/style.css"

export const PriceFilter = () => {
  const [value, setValue] = useState([2000, 5000])
  const [minVal, setMinVal] = useState(value[0])
  const [maxVal, setMaxVal] = useState(value[1])

  const handleMinInputChange = (e: any) => {
    // if (e.target.value > 10000) return

    setMinVal(e.target.value)
  }
  const handleMaxInputChange = (e: any) => {
    setMaxVal(e.target.value)
  }

  return (
    <>
      <RangeSlider value={value} onInput={setValue} min={0} max={10000} />
      <div className='flex justify-center gap-4 text-center mt-4 mr-4'>
        <p>{value[0]}</p>
        <p>{value[1]}</p>
      </div>
    </>
  )
}
