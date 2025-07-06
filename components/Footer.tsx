import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub,  } from "react-icons/fa";
import { LuVault } from "react-icons/lu";

export const Footer = () => {
    return (
        <footer className="absolute inset-x-0 bottom-0 bg-white/10 w-full h-24 font-roboto">
            <div className="flex items-center justify-center gap-5 mt-5 mb-3">
                <div>
                    <Link href={"/"}>Home</Link>
                </div>
                <div>
                    <Link href={"/about"}>About Me</Link>
                </div>
                <div>
                    Resume
                </div>
                <div>
                    <Link href={"/"}>Projects</Link>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5 pb-5">
                <a href="https://www.linkedin.com/in/michael-buenrostro/" target="_blank"><FaLinkedin size={25}/></a>
              <a href="https://github.com/mbuenrostro21" target="_blank"><FaGithub size={25}/></a>
              <a href="https://svault.mintlify.app/introduction" target="_blank"><LuVault size={25}/></a>
            </div>
        </footer>
    )
}