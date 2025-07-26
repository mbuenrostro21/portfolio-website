'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { NavBar } from '../../../components/NavBar';

export default function Projects(){
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/textured-blue.jpg')` }}
          >
          </div>
        </div>
  
        {/* Foreground Content */}
        <div className="relative z-10">
          <NavBar />
          <div className='flex flex-col justify-center items-center'>
            <h1 className="text-6xl text-[var(--port-white)] my-12 font-anta">Showcases</h1>
            <div className="embla bg-red-500" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">Slide 1</div>
                    <div className="embla__slide">Slide 2</div>
                    <div className="embla__slide">Slide 3</div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
        
      );

}