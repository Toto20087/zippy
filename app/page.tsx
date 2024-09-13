import Header from "@/components/header";
import Hero from "@/components/hero";
import { CarouselSize } from "@/components/carrousel_section";

export default function Home() {
  return (
    <div className='h-full flex items-center justify-center flex-col '>
      <Header />
      <Hero />
      <CarouselSize />
    </div>
  );
}
