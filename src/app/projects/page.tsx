'use client'
import React, { useCallback, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from 'lucide-react'
import { NavBar } from '../../../components/NavBar';
import { projectsData } from '../../data';
import Image from 'next/image';

// Define the Project type based on your projectsData structure
type Project = {
  id: string | number;
  name: string;
  screenshot: string;
  summary: string;
  techStack: Array<{
    name: string;
    icon: React.ComponentType<{ color?: string; size?: number; className?: string }>;
    color: string;
  }>;
  keyFeatures: string[];
  githubUrl: string;
};

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const openModal = (project: Project) => {
    setSelectedProject(project);
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/textured-blue.png')` }}
        ></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <NavBar />
        <div className='flex flex-col justify-center items-center px-4 flex-1'>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--port-white)] mb-8 md:mb-12 font-anta text-center">Projects</h1>
          
          {/* Carousel Container */}
          <div className="relative w-full max-w-6xl">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {projectsData.map((project, index) => (
                  <div key={project.id} className="embla__slide flex-[0_0_280px] sm:flex-[0_0_320px] md:flex-[0_0_350px] min-w-0 px-2 sm:px-3 md:pl-4">
                    <div 
                      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                        index === selectedIndex ? 'blur-none scale-100 opacity-100' : 'blur-[2px] scale-90 opacity-80'
                      }`}
                      onClick={() => openModal(project)}
                    >
                      <div className="relative h-72 sm:h-80 md:h-96 w-full">
                        <Image
                          src={project.screenshot}
                          alt={project.name}
                          fill
                          className="object-fit"
                          unoptimized
                        />
                      </div>
                    </div>
                    <div className="p-3 md:p-4 font-anta">
                      <h3 className="text-2xl md:text-3xl text-[var(--port-white)] text-center">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-0 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors duration-200 z-10"
              onClick={scrollPrev}
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              className="absolute right-0 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors duration-200 z-10"
              onClick={scrollNext}
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content Box */}
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="sticky top-3 sm:top-4 right-3 sm:right-4 float-right z-20 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            {/* The Unified Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-8 p-4 sm:p-6 md:p-10">
              
              {/* LEFT COLUMN: Visuals & Tech (3/6 Cols) */}
              <div className="md:col-span-3 flex flex-col gap-6 sm:gap-8 text-[var(--port-blue)]">
                <div className="relative h-48 sm:h-64 md:h-80 w-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={selectedProject.screenshot}
                    alt={selectedProject.name}
                    fill
                    className="object-fit"
                    unoptimized
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b pb-2 font-anta">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3 font-roboto">
                    {selectedProject.techStack.map((tech, index) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-1.5 sm:gap-2 bg-gray-50 border border-gray-100 rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 hover:bg-gray-100 transition-colors"
                        >
                          <IconComponent color={tech.color} size={16} className="sm:w-[18px] sm:h-[18px]" />
                          <span className="font-semibold text-xs sm:text-sm">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Info & Features (3/6 Cols) */}
              <div className="md:col-span-3 flex flex-col gap-4 sm:gap-6 text-[var(--port-blue)]">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 font-anta">
                    {selectedProject.name}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed font-roboto">
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b pb-2 font-anta">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 gap-2.5 sm:gap-3 font-roboto">
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                        <span className="font-medium text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 sm:gap-4 mt-auto pt-4 sm:pt-6">
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all text-sm sm:text-base"
                    >
                        <Github size={16} className="sm:w-[18px] sm:h-[18px]" /> 
                        <span className="hidden sm:inline">Source Code</span>
                        <span className="sm:hidden">Code</span>
                    </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Embla Required Styles */}
      <style jsx>{`
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 350px;
          min-width: 0;
        }
        @media (max-width: 640px) {
          .embla__slide {
            flex: 0 0 280px;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .embla__slide {
            flex: 0 0 320px;
          }
        }
      `}</style>
    </div>
  );
}