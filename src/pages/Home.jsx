import Sea from "../components/Sea";

export default function Home() {
  return (
    <div className="relative  h-screen ">
      <Sea />
      <div
        className={` flex flex-col absolute top-[34.6vh] left-1/3  p-8 z-20`}
      >
        <div className="name font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl  tracking-tighter font-Cinzel text-transparent bg-clip-text bg-gradient-to-r from-lime via-cream to-lime ">
          Salma <span className="ml-16">Ghabri</span>
        </div>
        <p
          className={`sm:text-lg md:text-xl lg:text-2xl  text-transparent  bg-clip-text bg-gradient-to-tl from-cherry via-obsidian to-lime self-end font-Cinzel font-bold`}
        >
          An engineer (in the making).
        </p>
      </div>
    </div>
  );
}
