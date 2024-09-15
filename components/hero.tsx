"use client"

import Image from "next/image"
import ButtonGrande from "./button_grande"
import { FaLinkedin,FaInstagramSquare,FaFacebookSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <>
        <div className='h-[100%] w-full flex items-center justify-center bg-[#0099FF] bg-[url("/deskback.svg")] bg-cover bg-no-repeat '>
            <div className='flex items-center justify-center flex-col space-y-6'>
                <h1 className="text-8xl w-1/2 text-white">
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
        </div>

        <style jsx>{`
        @keyframes flotar {
          0% {
            transform: translateY(20px);
          }
          50% {
            transform: translateY(0);
          }
            100% {
                transform: translateY(20px);
            }
        }
        .animate-flotar {
          animation: flotar 5s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

export default Hero