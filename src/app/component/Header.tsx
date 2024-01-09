"use client"

import { useState } from "react"
import NavigationDrawer from "./navigation-drawer"
import { Menu } from "react-feather"

interface List {
  name: string
  path: string
}

export const Lists = ({ list }: { list: List }) => {
  return <li>{list.name}</li>
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const lists: List[] = [
    { name: "Home", path: "/" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/Women" },
    { name: "Children", path: "/children" },
    { name: "Bags", path: "/bags" },
  ]

  return (
    <div className=' bg-slate-700 fixed top-0 left-0 w-full z-[1]  '>
      <nav className=' flex mx-auto justify-between px-12  py-4'>
        <div>
          <p className='text-neutral-400 font-semibold text-xl'>Logo</p>
        </div>
        {/* <button className='block bg-sky-600 md:hidden'>Menu</button> */}
        <Menu
          onClick={() => setIsOpen(true)}
          className=' cursor-pointer md:hidden'
        />

        {/* desktop nav */}
        <ul className='hidden md:flex gap-4 '>
          {lists.map(item => (
            <Lists key={item.name} list={item} />
          ))}
        </ul>

        {/* mobile nav */}
        <NavigationDrawer
          isOpen={isOpen}
          closeDrawer={() => setIsOpen(false)}
        />
      </nav>
    </div>
  )
}

export default Header
