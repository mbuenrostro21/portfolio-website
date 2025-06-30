import React from "react";
import Link from "next/link";

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-white/4 shadow-md h-12 rounded py-3 px-5">
      <div className="flex justify-between">
        <div>
            Logo
        </div>
        <div className="flex gap-5">
            <div><Link href="/">Home</Link></div>
            <div>
                Resume
            </div>
            <div><Link href="/about">About</Link></div>
        </div>
      </div>
    </nav>
  );
};
