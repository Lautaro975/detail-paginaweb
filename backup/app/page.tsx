import EmblaCarousel from "@/components/Carousel/emblaCarrousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  }
  const SLIDES = ["/img/home/fondoChico.png","/img/home/limpieza-grl.jpg"]
  
  return (
    <main className="w-full min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </main>
  );
}