import EmblaCarousel from "@/components/Carousel/emblaCarrousel";
import ImageLink from "@/components/Image/imageLink/imageLink";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  }
  const SLIDES = [{
    image: "/img/home/lavadoAuto.jpg",
    text: <>Protección y <br /> limpieza para <br /> tu vehículo</>
  },{
    image: "/img/home/lavado-grl.avif",
    text: <>Los productos y <br /> servicios que <br /> necesitas</>
  }]
  
  return (
    <main className="w-full min-h-screen bg-gray-100 ">
      <div className="max-w-7xl mx-auto">
        <EmblaCarousel sliders={SLIDES} options={OPTIONS} />
      </div>
      <div className="relative">
        <ImageLink href="/" src="/img/home/usoFabrica.png" alt="usoFabrica" className="object-cover">
          <p className="text-black text-2xl font-bold">sadsa</p>
        </ImageLink>
      </div>
    </main>
  );
}