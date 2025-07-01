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
          <div className="w-full h-full bg-[#0E4C92]/50" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <NavBar />
        
      </div>
    </div>
  );
}
