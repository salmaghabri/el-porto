export default function Button({ children, onClick }) {
  return (
    <div
      className="border-l border-t border-transparent  rounded-lg  hover:border-b-4
      hover:border-r-2 
      hover:border-l-0
      hover:border-t-0 
      "
    >
      <button
        onClick={onClick}
        className="
        w-full
      rounded-lg 
      border-obsidian 
      border
      border-b-[6px]
      border-r-4 
      py-1
      px-3
      sm:py-2.5 
      sm:px-5 
      sm:text-base 
      sm:font-semibold
      font-Vioda 
      bg-cream 
      text-obsidian 
      cursor-pointer 
      hover:border-b-2
      hover:border-2 
      hover:border-r-2 
      hover:border-obsidian

    "
      >
        {children}
      </button>
    </div>
  );
}
