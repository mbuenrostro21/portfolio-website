'use client'
import React, { useCallback, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from 'lucide-react'
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

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const openModal = (project) => {
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
      <div className="relative z-10">
        <NavBar />
        <div className='flex flex-col justify-center items-center px-4'>
          <h1 className="text-6xl text-[var(--port-white)] my-12 font-anta">Projects</h1>
          
          {/* Carousel Container */}
          <div className="relative w-full max-w-6xl">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {projectsData.map((project, index) => (
                  <div key={project.id} className="embla__slide flex-[0_0_350px] min-w-0 pl-4">
                    <div 
                      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                        index === selectedIndex ? 'blur-none scale-100 opacity-100' : 'blur-[2px] scale-90 opacity-80'
                      }`}
                      onClick={() => openModal(project)}
                    >
                      <div className="relative h-96 w-full">
                        <Image
                          src={project.screenshot}
                          alt={project.name}
                          fill
                          className="object-fit"
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
              className="absolute left-[-20px] md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors duration-200 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              className="absolute right-[-20px] md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors duration-200 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* The Unified Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 p-6 md:p-10">
              
              {/* LEFT COLUMN: Visuals & Tech (3/6 Cols) */}
              <div className="md:col-span-3 flex flex-col gap-8 text-[var(--port-blue)]">
                <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={selectedProject.screenshot}
                    alt={selectedProject.name}
                    fill
                    className="object-fit"
                    unoptimized
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 border-b pb-2 font-anta">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3 font-roboto">
                    {selectedProject.techStack.map((tech, index) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors"
                        >
                          <IconComponent color={tech.color} size={18} />
                          <span className="font-semibold text-sm">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Info & Features (3/6 Cols) */}
              <div className="md:col-span-3 flex flex-col gap-6 text-[var(--port-blue)]">
                <div>
                  <h2 className="text-4xl font-extrabold mb-4 font-anta">
                    {selectedProject.name}
                  </h2>
                  <p className="text-lg leading-relaxed font-roboto">
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 border-b pb-2 font-anta">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 font-roboto">
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {/* <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" /> */}
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Action Buttons */}
                <div className="flex gap-4 mt-auto pt-6">
                    {/* <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all">
                        <ExternalLink size={18} /> Live Demo
                    </button> */}
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-bold py-3 px-6 rounded-xl transition-all"
                    >
                        <Github size={18} /> Source Code
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
        @media (max-width: 768px) {
          .embla__slide {
            flex: 0 0 280px;
          }
        }
      `}</style>
    </div>
  );
}