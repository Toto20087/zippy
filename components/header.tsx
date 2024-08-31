import Image from "next/image"
import ButtonP from "./button"
import {Button} from "./ui/button"

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-[#0099FF] pt-6 pb-6 pr-3 pl-3 fixed w-full'>
        <Image 
        src="/zippy.svg"
        width={100}
        height={100}
        alt="Zippy Logo"
        className="ml-2"
        />
        <ButtonP
         url="/"
         text="Ingresar"
        />
    </div>
  )
}

export default Header