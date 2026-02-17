import { NavBar } from "../../components/NavBar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuVault } from "react-icons/lu";
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/la-backdrop-enhanced.png')` }}
        >
          <div className="w-full h-full bg-[var(--port-blue)]/20" />
        </div>
      </div>

      {/* Animated Elements Layer */}
      <div className="absolute inset-0 z-5">
        {/* Floating Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
        <div className="particle particle-9"></div>
        <div className="particle particle-10"></div>
        <div className="particle particle-11"></div>
        <div className="particle particle-12"></div>

        {/* Twinkling Stars */}
        <div className="star star-1">✨</div>
        <div className="star star-2">✨</div>
        <div className="star star-3">✨</div>
        <div className="star star-4">✨</div>
        <div className="star star-5">✨</div>
        <div className="star star-6">✨</div>
        <div className="star star-7">✨</div>
        <div className="star star-8">✨</div>
        <div className="star star-9">✨</div>
        <div className="star star-10">✨</div>
        <div className="star star-11">✨</div>
        <div className="star star-12">✨</div>
        <div className="star star-13">✨</div>
        <div className="star star-14">✨</div>
        <div className="star star-15">✨</div>

        {/* Subtle Gradient Animation */}
        <div className="animated-gradient"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <NavBar />
        
        {/* Mobile-First Responsive Layout */}
        <div className="px-4 py-8 md:px-8 lg:px-16 max-w-8xl mx-auto">
          {/* Mobile: Vertical Stack, Desktop: Grid Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {/* Header Section */}
              <div className="flex flex-col items-start text-left gap-4 md:gap-6">
                <h1 className="font-anta text-3xl md:text-4xl lg:text-5xl">Michael Buenrostro</h1>
                <h2 className="font-anta text-2xl md:text-3xl lg:text-4xl">Full Stack Developer</h2>
              </div>

              {/* Photo Section - Shows here on mobile */}
              <div className="flex lg:hidden flex-col items-center gap-4">
                <Image 
                  src={'/port-photo.JPG'}
                  alt="portfolio photo"
                  width={250}
                  height={250}
                  className="rounded-md"
                />
                <div className="flex flex-row justify-center gap-3">
                  <a href="https://www.linkedin.com/in/michael-buenrostro/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30}/>
                  </a>
                  <a href="https://github.com/mbuenrostro21" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30}/>
                  </a>
                  <a href="https://svault.mintlify.app/introduction" target="_blank" rel="noopener noreferrer">
                    <LuVault size={30}/>
                  </a>
                </div>
              </div>
              
              {/* About Me Section */}
              <div className="bg-[var(--light-blue)] rounded-md border border-[var(--port-purple)] p-5 md:p-6">
                <h1 className="font-anta text-[var(--port-purple)] text-xl md:text-2xl mb-3">About Me</h1>
                <p className="font-roboto text-[var(--port-purple)] text-sm md:text-base leading-relaxed">
                  I am a Full Stack Developer with over 3 years of experience building scalable, production-ready applications. My expertise lies in bridging the gap between complex logic and the high-impact results that drive business growth. I thrive at the intersection of clean architecture and purposeful problem-solving. My primary focus is on the Frontend, where I specialize in crafting intuitive, high-performance interfaces. I believe a great product is defined by its User Experience. To me, code is successful only when it provides a frictionless journey for the user.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                <div className="bg-[var(--light-blue)] rounded-md flex flex-col justify-center items-center border border-[var(--port-purple)] p-5 md:p-5">
                  <h1 className="font-anta text-[var(--port-purple)] text-xl md:text-2xl mb-1 font-bold">3+</h1>
                  <p className="font-roboto text-[var(--port-purple)] text-[10px] md:text-xs text-center">Years Experience</p>
                </div>
                <div className="bg-[var(--light-blue)] rounded-md flex flex-col justify-center items-center border border-[var(--port-purple)] p-5 md:p-5 ">
                  <h1 className="font-anta text-[var(--port-purple)] text-xl md:text-2xl mb-1 font-bold">35+</h1>
                  <p className="font-roboto text-[var(--port-purple)] text-[10px] md:text-xs text-center">Features Shipped</p>
                </div>
                <div className="bg-[var(--light-blue)] rounded-md flex flex-col justify-center items-center border border-[var(--port-purple)] p-5 md:p-5 ">
                  <h1 className="font-anta text-[var(--port-purple)] text-xl md:text-2xl mb-1 font-bold">300+</h1>
                  <p className="font-roboto text-[var(--port-purple)] text-[10px] md:text-xs text-center">Code Reviews</p>
                </div>
                <div className="bg-[var(--light-blue)] rounded-md flex flex-col justify-center items-center border border-[var(--port-purple)] p-5 md:p-5 ">
                  <h1 className="font-anta text-[var(--port-purple)] text-xl md:text-2xl mb-1 font-bold">1M+</h1>
                  <p className="font-roboto text-[var(--port-purple)] text-[10px] md:text-xs text-center">Database Records</p>
                </div>
                <div className="bg-[var(--light-blue)] rounded-md flex flex-col justify-center items-center border border-[var(--port-purple)] p-5 md:p-5 col-span-2 sm:col-span-1">
                  <h1 className="font-anta text-[var(--port-purple)] text-xl md:text-2xl mb-1 font-bold">100%</h1>
                  <p className="font-roboto text-[var(--port-purple)] text-[10px] md:text-xs text-center">Employer Confidence</p>
                </div>
              </div>
            </div>

            {/* Right Column - Photo Section (Desktop Only) */}
            <div className="hidden lg:flex flex-col items-center justify-start pt-6">
              <Image 
                src={'/port-photo.jpg'}
                alt="portfolio photo"
                width={300}
                height={300}
                className="rounded-md"
              />
              <div className="flex flex-row justify-center mt-6 gap-3">
                <a href="https://www.linkedin.com/in/michael-buenrostro/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30}/>
                </a>
                <a href="https://github.com/mbuenrostro21" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30}/>
                </a>
                <a href="https://svault.mintlify.app/introduction" target="_blank" rel="noopener noreferrer">
                  <LuVault size={30}/>
                </a>
              </div>
              <div className="flex justify-center items-center mt-8">
                <button className="bg-[var(--light-blue)] text-[var(--port-purple)] border border-[var(--port-purple)] rounded-sm px-8 py-3 font-roboto hover:bg-opacity-90 transition-all">
                  <Link href={"/contact"}>Contact Me</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        /* Floating Particles */
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle-1 { top: 20%; left: 10%; animation-delay: 0s; animation-duration: 8s; }
        .particle-2 { top: 60%; left: 20%; animation-delay: 1s; animation-duration: 10s; }
        .particle-3 { top: 30%; left: 70%; animation-delay: 2s; animation-duration: 7s; }
        .particle-4 { top: 80%; left: 60%; animation-delay: 3s; animation-duration: 9s; }
        .particle-5 { top: 10%; left: 80%; animation-delay: 4s; animation-duration: 11s; }
        .particle-6 { top: 50%; left: 90%; animation-delay: 5s; animation-duration: 6s; }
        .particle-7 { top: 20%; left: 30%; animation-delay: 0s; animation-duration: 8s; }
        .particle-8 { top: 60%; left: 50%; animation-delay: 1s; animation-duration: 10s; }
        .particle-9 { top: 40%; left: 70%; animation-delay: 2s; animation-duration: 7s; }
        .particle-10 { top: 70%; left: 60%; animation-delay: 3s; animation-duration: 9s; }
        .particle-11 { top: 10%; left: 35%; animation-delay: 4s; animation-duration: 11s; }
        .particle-12 { top: 50%; left: 80%; animation-delay: 5s; animation-duration: 6s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }

        /* Twinkling Stars */
        .star {
          position: absolute;
          font-size: 1rem;
          animation: twinkle 3s ease-in-out infinite;
        }

        .star-1 { top: 10%; left: 15%; animation-delay: 0s; }
        .star-2 { top: 20%; left: 85%; animation-delay: 1s; }
        .star-3 { top: 5%; left: 60%; animation-delay: 2s; }
        .star-4 { top: 15%; left: 40%; animation-delay: 1.5s; }
        .star-5 { top: 25%; left: 25%; animation-delay: 2.5s; }
        .star-6 { top: 8%; left: 75%; animation-delay: 0.5s; }
        .star-7 { top: 18%; left: 50%; animation-delay: 1.8s; }
        .star-8 { top: 12%; left: 30%; animation-delay: 2.2s; }
        .star-9 { top: 22%; left: 70%; animation-delay: 0.8s; }
        .star-10 { top: 6%; left: 45%; animation-delay: 2.8s; }
        .star-11 { top: 28%; left: 55%; animation-delay: 1.2s; }
        .star-12 { top: 14%; left: 20%; animation-delay: 2.6s; }
        .star-13 { top: 9%; left: 80%; animation-delay: 0.3s; }
        .star-14 { top: 26%; left: 35%; animation-delay: 1.9s; }
        .star-15 { top: 16%; left: 65%; animation-delay: 2.4s; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Animated Gradient Overlay */
        .animated-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(59, 130, 246, 0.1),
            rgba(147, 51, 234, 0.1),
            rgba(59, 130, 246, 0.1)
          );
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Optional: Subtle pulsing effect on content */
        h1, h2, h3 {
          animation: subtlePulse 4s ease-in-out infinite;
        }

        @keyframes subtlePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }

        /* Ensure overflow is hidden to prevent scrollbars from animations */
        .overflow-hidden {
          overflow: hidden;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .star {
            font-size: 0.75rem;
          }
          
          .particle {
            width: 3px;
            height: 3px;
          }
        }
      `}</style>
    </div>
  );
}