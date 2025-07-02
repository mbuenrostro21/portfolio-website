import { NavBar } from "../../components/NavBar";
import { FaLinkedin, FaGithub,  } from "react-icons/fa";
import { LuVault } from "react-icons/lu";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/la-backdrop.jpg')` }}
        >
          <div className="w-full h-full bg-[var(--port-blue)]/70" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <NavBar />
        <div className="grid grid-cols-8 grid-rows-20 gap-7 m-5">
          <div className=" col-start-2 col-span-4 row-start-4 row-span-18 flex flex-col items-start text-left gap-8 ms-10">
            <h1 className="font-anta text-5xl">Michael Buenrostro</h1>
            <h2 className="font-anta text-4xl">Full Stack Developer</h2>
            <h3 className="font-roboto font-bold text-3xl">Software Engineer crafting solutions through innovation and dedication</h3>
          </div>
          <div className="bg-blue-400 col-start-6 col-span-2 row-start-3 row-span-18">Goodbye</div>
        </div>
        
      </div>
    </div>
  );
}
