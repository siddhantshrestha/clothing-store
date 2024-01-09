
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { X } from "react-feather"
import cn from "classnames"
import { useEffect } from "react"
function NavigationDrawer({
  isOpen,
  closeDrawer,
}: {
  isOpen: boolean
  closeDrawer: () => void
}) {
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [isOpen])

  return (
    <div
      className={cn(
        "fixed top-0 bg-red-400 pb-[18px] px-[28px] w-full h-[110vh] z-[100] transition-all overflow-auto duration-500 md:hidden",
        {
          "right-0": isOpen,
          "right-[-100vw]": !isOpen,
        }
      )}>
      <div className='sticky top-0 pt-[18px] pb-[12px]'>
        <div className='flex justify-end'>
          <X size={32} onClick={closeDrawer} className='cursor-pointer' />
        </div>
        <div className='mt-20 flex flex-col gap-10 text-center text-3xl'>
          <Link onClick={() => closeDrawer()} className='inline-block' href='/'>
            Home
          </Link>
          <Link
            onClick={() => closeDrawer()}
            className='inline-block'
            href='/mens'>
            Mens
          </Link>
          <Link
            onClick={() => closeDrawer()}
            className='inline-block'
            href='/women'>
            Women
          </Link>
          <Link
            onClick={() => closeDrawer()}
            className='inline-block'
            href='/children'>
            Children
          </Link>
          <Link
            onClick={() => closeDrawer()}
            className='inline-block'
            href='/bags'>
            Bags
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NavigationDrawer
