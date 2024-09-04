export default function Badge({ text }) {
  return (
    <button
      className="
      rounded-lg
      border
      border-solid 
      border-cherry 
      border-b-[6px]
      border-r-4 
      py-2
      px-3
      text-sm
      font-medium 
      bg-cream 
      text-cherry 
      hover:text-cream
      hover:bg-lavender
    "
    >
      {text}
    </button>
  );
}
