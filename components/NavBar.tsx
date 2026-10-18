import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RESUME_URL } from "../src/links";

export const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-[5] flex items-center gap-4 sm:gap-7 px-[clamp(20px,5vw,72px)] py-3 bg-[rgba(10,22,51,0.72)] backdrop-blur-[14px] border-b border-[rgba(156,195,255,0.12)]">
      <Link href="/" className="mr-auto" aria-label="Home">
        <Image
          src="/port-logo.png"
          alt="Michael Buenrostro logo"
          width={60}
          height={50}
          priority
        />
      </Link>
      <Link href="/#work" className="text-[15px] font-semibold text-secondary hover:text-white">
        Projects
      </Link>
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[15px] font-semibold text-secondary hover:text-white"
      >
        Resume
      </a>
      <Link
        href="/contact"
        className="text-[15px] font-semibold text-navy bg-card hover:bg-card-hover px-5 py-2.5 rounded-full"
      >
        Contact
      </Link>
    </nav>
  );
};
