'use client'
import React, { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { NavBar } from '../../../components/NavBar';
import { projectsData } from '../../data';
import Image from 'next/image';

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
        <div className='flex flex-col justify-center items-center px-4'>
          <h1 className="text-6xl text-[var(--port-white)] my-12 font-anta">Showcases</h1>
          
          {/* Carousel Container */}
          <div className="relative w-full max-w-6xl">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {projectsData.map((project, index) => (
                  <div key={project.id} className="embla__slide flex-[0_0_350px] min-w-0 pl-4">
                    <div 
                      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                        index === selectedIndex ? 'blur-none scale-100 opacity-100' : 'blur-xs scale-90 opacity-95'
                      }`}
                      onClick={() => openModal(project)}
                    >
                      <div className="relative h-96 w-full">
                        <Image
                          src={project.screenshot}
                          alt={project.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    </div>
                      <div className="p-4 font-anta">
                        <h3 className="text-3xl text-[var(--port-white)] text-center">
                          {project.name}
                        </h3>
                      </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors duration-200 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors duration-200 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Modal Header */}
            <div className="relative h-64 w-full">
              <Image
                src={selectedProject.screenshot}
                alt={selectedProject.name}
                fill
                className="object-cover rounded-t-xl"
                unoptimized
              />
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedProject.name}
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {selectedProject.summary}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2"
                      >
                        <IconComponent 
                          color={tech.color} 
                          size={20} 
                        />
                        <span className="font-medium text-gray-700">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  View Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 350px;
          min-width: 0;
          padding-left: 1rem;
        }
        
        /* Ensure modal scrolls properly on mobile */
        @media (max-width: 768px) {
          .embla__slide {
            flex: 0 0 280px;
          }
        }
      `}</style>
    </div>
  );
}