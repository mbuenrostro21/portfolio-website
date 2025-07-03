import { NavBar } from "../../../components/NavBar";
export default function AboutPage() {
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
        <div className="m-10 gap-5">
          <h1 className="font-anta text-5xl">Hello I'm Michael,</h1>
          <h1 className="font-anta text-5xl">A Software Engineer Based in Los Angeles</h1>
          <p>From the gritty streets of Huntington Park, where opportunities were scarce, education faltered, and crime seemed like the only way out, Michael was never one to be defined by his circumstances. In a city where dreams were often crushed by harsh realities, he refused to let his environment dictate his future. </p>
          <p>Determined to break the cycle, Michael fought against the odds. Long nights of self-study fueled his passion for technology, and with unwavering resilience, he earned his way into college. There, he discovered the world of software engineering—an escape, a challenge, and a new path to success. </p>
          <p>Through sheer grit and determination, Michael transformed his life from one of limitation to a world of boundless possibility. Now, as a software engineer, he creates innovative solutions, proving that no matter where you come from, greatness is within reach if you have the courage to pursue it.</p>
        </div>
      </div>
    </div>
      
    );
  }