'use client'
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export const AosInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  // Client-side navigation swaps in new [data-aos] elements that AOS hasn't seen yet.
  // Jump to the top first: the global smooth scroll would otherwise glide up from the
  // old scroll position and AOS wouldn't reveal anything until it finished.
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
    AOS.refreshHard();
  }, [pathname]);

  return null;
};
