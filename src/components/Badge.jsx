export default function Badge({ children }) {
  return (
    <button
      className="
      rounded-lg
      border-2
      border-solid 
      border-cherry 
      py-1 px-2 sm:py-2 sm:px-3
      text-xs sm:text-sm
      font-semibold 
      bg-cream 
      text-cherry 
      hover:text-cream
      hover:bg-lime
      font-Vioda 
      "
    >
      {children}
    </button>
  );
}
