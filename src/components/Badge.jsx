export default function Badge({ children }) {
  return (
    <button
      className="
      rounded-lg
      border-2
      border-solid 
      border-cherry 
      py-2
      px-3
      text-sm
      font-medium 
      bg-cream 
      text-cherry 
      hover:text-cream
      hover:bg-lime
    "
    >
      {children}
    </button>
  );
}
