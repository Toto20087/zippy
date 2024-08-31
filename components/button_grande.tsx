import React from 'react';

const ButtonGrande = ({url, text}: {url:string, text:string}) => {
    return (
      <a 
        href={url}
        className="inline-flex items-center justify-center bg-[#33FFD1] text-[#0099FF] rounded-2xl px-12 py-3 transition-all duration-300 hover:bg-[#BDFF00] hover:pr-16 group"
      >
        <span className='text-xl'>{text}</span>
        <svg  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25} color={"#0099FF"} fill={"none"}>
            <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    )
}

export default ButtonGrande;