import EmblaCarousel from "@/components/Carousel/emblaCarrousel";
import ImageLink from "@/components/Image/imageLink/imageLink";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  };
  const SLIDES = [
    {
      image: "/img/home/lavadoAuto.jpg",
      text: (
        <>
          Protección y <br /> limpieza para <br /> tu vehículo
        </>
      ),
    },
    {
      image: "/img/home/lavado-grl.avif",
      text: (
        <>
          Los productos y <br /> servicios que <br /> necesitas
        </>
      ),
    },
  ];

  return (
    <main className="w-full">
      <div className="xl:h-[calc(100dvh-64px)] mb-20">
        <EmblaCarousel sliders={SLIDES} options={OPTIONS} />
      </div>
      <section className="flex flex-col items-center justify-center">
        <div className="relative w-full md:h-96 h-52 max-w-2xl">
          <ImageLink
            href="/"
            src="/img/home/usoPersonal.png"
            alt="uso personal"
            classNameimg="object-cover peer brightness-[90%] hover:brightness-75 transition-all duration-300"
            classNameLink="absolute right-1/2 top-1/2 w-fit px-4 translate-x-1/2 text-center -translate-y-1/2 border-8 border-white py-2 [&:hover]:border-blue-600 [&:hover]:bg-blue-600 peer-hover:border-blue-600 peer-hover:bg-blue-600 shadow-2xl shadow-black transition-all duration-300"
          >
            <span className="text-white text-xl font-bold whitespace-nowrap">
              USO PERSONAL
            </span>
          </ImageLink>
        </div>
        <div className="relative w-full mt-8 md:h-96 h-52  max-w-2xl">
          <ImageLink
            href="/"
            src="/img/home/usoProfesional.png"
            alt="uso profesional"
            classNameimg="object-cover peer brightness-[90%] hover:brightness-75 transition-all"
            classNameLink="absolute right-1/2 top-1/2 w-fit px-4 translate-x-1/2 text-center -translate-y-1/2 border-8 border-white py-2 [&:hover]:border-red-500 [&:hover]:bg-red-500 peer-hover:border-red-500 peer-hover:bg-red-500 shadow-2xl shadow-black transition-all duration-300"
          >
            <span className="text-white text-xl font-bold whitespace-nowrap">
              USO PROFESIONALES
            </span>
          </ImageLink>
        </div>
        <div className="relative w-full mt-8 md:h-96 h-52 max-w-2xl">
          <ImageLink
            href="/"
            src="/img/home/usoFabrica.png"
            alt="uso industrial"
            classNameimg="object-cover peer brightness-[90%] hover:brightness-75 transition-all"
            classNameLink="absolute right-1/2 top-1/2 w-fit px-4 translate-x-1/2 text-center -translate-y-1/2 border-8 border-white py-2 [&:hover]:border-orange-600 [&:hover]:bg-orange-600 peer-hover:border-orange-600 peer-hover:bg-orange-600 shadow-2xl shadow-black transition-all duration-300"
          >
            <span className="text-white text-xl font-bold whitespace-nowrap">
              USO INDUSTRIAL
            </span>
          </ImageLink>
        </div>
        {/* esto no va a quedar asi, cuando tenga un back va a ver un objeto con
        los datos de los productos ahora estan harcodiados */}
      </section>
    </main>
  );
}
