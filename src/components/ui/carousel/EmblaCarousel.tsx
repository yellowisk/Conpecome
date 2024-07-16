import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import pictures from '@/assets/pictures/pictures'
import Slide from '../slide/slide'

type PropType = {
  slides: number[]
  type: string
  options?: EmblaOptionsType
  counters: number[]
  incrementCounter: (index: number) => void
  decrementCounter: (index: number) => void
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, counters, incrementCounter, decrementCounter } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const filteredSlides = slides.filter(index => pictures[index].type === props.type);

  return (
    <div className="embla">
      <div className="embla__viewport shadow-inner" ref={emblaRef}>
        <div className="embla__container">
          {filteredSlides.map(index => (
            <Slide 
              key={index} 
              image={pictures[index].src} 
              title={pictures[index].name} 
              price={pictures[index].price} 
              counter={counters[index]}
              incrementCounter={() => incrementCounter(index)}
              decrementCounter={() => decrementCounter(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
