"use client"
import { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from '@/components/Carousel/emblaCarrouselbotton'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

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
    <section className="max-w-3xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
          {slides.map((index,number) => (
            <div 
              className="pl-4 transform translate-x-0 translate-y-0 translate-z-0 flex-[0_0_100%]" 
              key={number}
            >
              <div className="relative w-full aspect-[16/9]">
                <Image 
                  src={index} 
                  alt="fondo" 
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-5 mt-7">
        <div className="flex flex-wrap justify-end items-center -mr-[0.6rem]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`
                w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
                appearance-none bg-transparent touch-manipulation
                [&:after]:content-[''] [&:after]:w-5 [&:after]:h-5 
                [&:after]:rounded-full [&:after]:flex [&:after]:items-center
                [&:after]:border-2 [&:after]:border-[var(--detail-light)]
                ${index === selectedIndex ? 
                  '[&:after]:border-[var(--text)] [&:after]:bg-[var(--color-acento)]' : 
                  '[&:after]:border-[var(--detail-light)] [&:after]:bg-transparent'}
              `}
            />
          ))}
        </div>
      </div> */}
    </section>
  )
}

export default EmblaCarousel