export function SectionTitle({ title, id }) {
  return (
    <div id={id} className="ml-4 self-start flex flex-col text-obsidian">
      <h1
        className={`text-5xl text-cherry font-Cinzel animate-fadeIn w-1/3 mt-8`}
      >
        {title}
      </h1>
      <div className="border border-current rounded-[80%] max-w-3xl animate-fadeIn"></div>
    </div>
  );
}
