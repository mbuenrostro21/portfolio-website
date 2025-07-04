import { NavBar } from "../../../components/NavBar";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import { IoGameControllerOutline, IoBeer } from "react-icons/io5";
import { PiChefHat } from "react-icons/pi";
import { FaChess } from "react-icons/fa";


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
        <div className="flex flex-col mx-24 my-12 gap-5">
          <h1 className="font-anta text-5xl text-[var(--light-blue)]">Hello I'm Michael,</h1>
          <h1 className="font-anta text-5xl text-[var(--light-blue)]">A Software Engineer Based in Los Angeles</h1>
          <p className="font-roboto">From the gritty streets of Huntington Park, where opportunities were scarce, education faltered, and crime seemed like the only way out, Michael was never one to be defined by his circumstances. In a city where dreams were often crushed by harsh realities, he refused to let his environment dictate his future. </p>
          <p className="font-roboto">Determined to break the cycle, Michael fought against the odds. Long nights of self-study fueled his passion for technology, and with unwavering resilience, he earned his way into college. There, he discovered the world of software engineering—an escape, a challenge, and a new path to success. </p>
          <p className="font-roboto">Through sheer grit and determination, Michael transformed his life from one of limitation to a world of boundless possibility. Now, as a software engineer, he creates innovative solutions, proving that no matter where you come from, greatness is within reach if you have the courage to pursue it.</p>
        </div>
        <div className="flex flex-col ms-24 bg-[var(--port-white)] w-7/8 h-[1px]"></div>
        <div className="flex flex-col mx-24 my-12 gap-5 items-end">
          <h1 className="font-anta text-5xl text-[var(--light-blue)]">Interests</h1>
          <div className="bg-[var(--light-blue)] h-36 w-1/2 rounded-2xl font-anta text-2xl text-[var(--port-purple)]">
            <ul className="flex flex-row justify-between mx-5 my-7">
              <li className="flex flex-row gap-2"><MdOutlineSportsBasketball size={30}/> Sports</li>
              <li className="flex flex-row gap-2"><GiBookCover size={30}/> Reading</li>
              <li className="flex flex-row gap-2"><IoGameControllerOutline size={30}/> Video Games</li>
            </ul>
            <ul className="flex flex-row justify-between m-5">
              <li className="flex flex-row gap-2"><IoBeer size={30}/> Breweries</li>
              <li className="flex flex-row gap-2"><PiChefHat size={30}/> Cooking</li>
              <li className="flex flex-row gap-2"><FaChess size={30}/> Board Games</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      
    );
  }