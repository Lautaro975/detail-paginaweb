"use client"
import { useCallback, useState, useEffect } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from '@/components/Carousel/emblaCarrouselbotton'
import useEmblaCarousel from 'embla-carousel-react'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import cn from 'classnames'

type PropType = {
  sliders: {
    image: string
    text: React.ReactNode
  }[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { sliders, options } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      delay: 10000,
      stopOnInteraction: false
    })
  ])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', () => {
      setCurrentIndex(emblaApi.selectedScrollSnap()) //escucha el cambio de imagen y lo setea
    })
  }, [emblaApi])


  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )
  

  return (
    <section className="max-w-3xl m-auto relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
          {sliders.map((slide,index) => (
            <div 
              className="pl-4 transform translate-x-0 translate-y-0 translate-z-0 flex-[0_0_100%]" 
              key={index}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image 
                  src={slide.image} 
                  alt="texto descripcion"
                  className="object-cover animate-zoom"
                  fill
                />
                  <p dir='rtl' className={cn('absolute bottom-10 right-10 text-white text-prettier text-2xl font-bold drop-shadow-lg transition-all duration-300  delay-500 ', {
                    'opacity-0 translate-x-5': currentIndex !== index
                  })}>
                    {slide.text}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center absolute bottom-4 left-0 right-0 z-10">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`
              w-8 h-8 flex items-center justify-center rounded-full cursor-pointer
              appearance-none bg-transparent touch-manipulation mx-1
              [&:after]:content-[''] [&:after]:w-6 [&:after]:h-6 
              [&:after]:rounded-full [&:after]:flex [&:after]:items-center
              [&:after]:border-4 [&:after]:border-white
              ${index === selectedIndex ? 
                '[&:after]:border-white [&:after]:bg-white' : 
                '[&:after]:border-white [&:after]:bg-transparent'}
              hover:[&:after]:bg-white/50 transition-all duration-300
            `}
          />
        ))}
      </div>
    </section>
  )
}

export default EmblaCarousel