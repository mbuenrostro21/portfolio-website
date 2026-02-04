import React from "react";
import Link from "next/link";
import Image from 'next/image'

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-white/4 shadow-md h-16 rounded py-3 px-5 font-roboto">
      <div className="flex justify-between items-center">
      <div>
        <Link href="/">
        <Image 
              src={'/port-logo.png'}
              alt="portfolio logo"
              width={50}
              height={50}
              className="flex justify-items-start"
            />
        </Link>
      </div>
        <div className="flex gap-5">
            {/* <div><Link href="/about">About</Link></div> */}
            <div>
            <a 
                href="/Michael_Buenrostro_Resume_2025.pdf" 
                download="Michael_Buenrostro_Resume_2025.pdf"
                className="text-white cursor-pointer hover:text-[var(--light-blue)] transition-colors"
            >
              Resume
            </a>
            </div>
            <div><Link href="/projects">Projects</Link></div>
            <div className="border border-white rounded-sm w-[75px] text-center bg-[#FDFDFA]/8"><Link href={"/contact"}>Contact</Link></div>
        </div>
      </div>
    </nav>
  );
};
