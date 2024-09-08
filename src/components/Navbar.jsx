import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className={`bg-none right-0  text-cherry p-4 fixed flex justify-end items-end w-full h-16 top-0 z-20 `}
    >
      <ul className="flex space-x-4   h-fit w-fit min-w-0 items-end gap-[10px] rounded-br-[20px] rounded-bl-[20px]  border-y-[0.075rem] border-lime  p-[10px] backdrop-blur-[15px] transition-all duration-200 ease-[cubic-bezier(0.22, 1, 0.36, 1)]  overflow-visible bg-cream font-Vioda">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
