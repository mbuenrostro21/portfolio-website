import React from "react";
import Link from "next/link";

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-white/4 shadow-md h-12 rounded py-3 px-5 font-roboto">
      <div className="flex justify-between">
      <div><Link href="/">Logo</Link></div>
        <div className="flex gap-5">
            <div><Link href="/about">About</Link></div>
            <div>Resume</div>
            <div><Link href="/">Projects</Link></div>
            <div className="border border-white rounded-sm w-[75px] text-center bg-[#FDFDFA]/8"><Link href={"/contact"}>Contact</Link></div>
        </div>
      </div>
    </nav>
  );
};
