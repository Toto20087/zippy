import Header from "@/components/header";
import Hero from "@/components/hero";
import { CarouselSize } from "@/components/carrousel_section";
import { CardP } from "@/components/card";

export default function Home() {
  return (
    <div className='h-full flex items-center justify-center flex-col mb-20 '>
      <Header />
      <Hero />
      <CarouselSize />
      <CardP 
      data="Buenas"
      />
    </div>
  );
}
