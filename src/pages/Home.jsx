import Sea from "../components/Sea";

export default function Home() {
  return (
    <div className="relative ">
      <Sea />
      <div className={` absolute top-[3rem] left-1/3  min-h-screen p-8 z-20`}>
        <h3 className="text-md text-obsidian rotate-45">I'm</h3>
        <h1 className="font-semibold text-7xl tracking-tighter font-Cinzel text-transparent bg-clip-text bg-gradient-to-r from-lime via-cream to-lime ">
          Salma <span className="font-Vioda text-lime"> * </span>Ghabri
        </h1>
        <p className={`text-lg text-lavender] mt-4`}>
          An engineer (in the making).
        </p>
      </div>
    </div>
  );
}
