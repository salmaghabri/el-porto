export function SectionTitle({ title, id }) {
  return (
    <div id={id} className="ml-4 self-start flex flex-col text-obsidian">
      <h1 className="text-2xl animate-fadeIn mb-2">{title}</h1>
      <div className="border border-current rounded-[80%] w-60 animate-fadeIn"></div>
    </div>
  );
}
