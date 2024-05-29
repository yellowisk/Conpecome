"use client"
import EmblaCarousel from '@/components/ui/carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import pictures  from '@/assets/pictures/pictures'
import "./embla.css"

export default function Order() {
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true}
    const SLIDE_COUNT = Object.keys(pictures).length;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    return (
        <div className='flex flex-col items-center caret-transparent h-screen'>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
            
    )
}