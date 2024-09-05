export default function Button({ children, onClick }) {
  return (
    <div
      className="border-l border-t border-transparent  rounded-lg  hover:border-b-4
      hover:border-r-2 
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
      py-2.5 
      px-5 
    
      text-base 
      font-medium 
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
