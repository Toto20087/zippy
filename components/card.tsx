import Image from "next/image";

export function CardP({ data }) {
    return (
      <div className='flex items-center justify-center'>
        <div className="flex items-start justify-start z-10 h-1/3">
          <Image
          src="/card1.png"
          alt="card"
          width="518"
          height="602"
          >

          </Image>
        </div>
      </div>
    );
  }
  