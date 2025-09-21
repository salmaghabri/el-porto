import { useEffect, useRef } from "react";
import Sea from "../components/Sea";

export default function Home() {
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate the line after component mounts
    if (lineRef.current) {
      setTimeout(() => {
        lineRef.current.style.width = "100%";
      }, 1000); // Delay the animation slightly
    }
  }, []);

  return (
    <div className="relative h-screen">
      <Sea />
      <div className={`flex flex-col absolute top-[34.6vh] left-1/3 p-8 z-20`}>
        <div className="name font-semibold text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter font-Cinzel text-transparent bg-clip-text bg-gradient-to-r from-lime via-cream to-lime">
          Salma <span className="sm:ml-16">Ghabri</span>
        </div>
        <div className="relative self-end">
          <p
            className={`sm:text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-l from-obsidian via-obsidian to-obsidian font-Vioda font-bold`}
          >
            An engineer{" "}
            <span className="relative text-obsidian">
              (in the making).
              <span
                ref={lineRef}
                className="absolute top-1/2 left-0 w-0 h-0.5 bg-obsidian transform -translate-y-1/2 transition-all duration-1000 ease-in-out"
              ></span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
