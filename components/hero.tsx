import Image from "next/image"
import ButtonGrande from "./button_grande"
import { FaLinkedin,FaInstagramSquare,FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <div className='bg-[url("/deskback.svg")] h-full w-full flex items-center justify-center  bg-no-repeat bg-cover bg-[#0099FF] space-x-32 '>
        <div className='flex items-start justify-center flex-col mr-10 space-y-6'>
            <Image 
            src="/zippy.svg"
            width={500}
            height={500}
            alt="Zippy Logo"
            />
            <h1 className="text-3xl w-1/2 text-white">
                Hacemos que enseñar Tecnología sea simple
            </h1>
            <ButtonGrande 
            url="/"
            text="Contactanos!"
            />
            <div className="flex items-center justify-center flex-row space-x-3">
                <FaLinkedin size={30} color={"#FFFFFF"} className="cursor-pointer" />
                <FaInstagramSquare size={30} color={"#FFFFFF"} className="cursor-pointer" />
                <FaFacebookSquare size={30} color={"#FFFFFF"} className="cursor-pointer" />
                <IoMdMail size={30} color={"#FFFFFF"} className="cursor-pointer" />
            </div>
        </div>
        <div className="flex items-center justify-center flex-col max-w-48 ml-9 ">
            <Image 
                src="/block1.svg"
                width={400}
                height={400}
                alt="Zippy Logo"
                className="absolute"
            />
            <Image 
                src="/block2.svg"
                width={400}
                height={400}
                alt="Zippy Logo"
                className="relative"
            />
            <Image 
                src="/block3.svg"
                width={400}
                height={400}
                alt="Zippy Logo"
                className="relative"
            />
            <Image 
                src="/block4.svg"
                width={400}
                height={400}
                alt="Zippy Logo"
                className="relative"
            />
            <Image 
                src="/block5.svg"
                width={400}
                height={400}
                alt="Zippy Logo"
                className="relative" 
            />
        </div>
    </div>
  )
}

export default Hero