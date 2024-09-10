import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav
      className={`bg-none right-0 text-cherry p-2 sm:p-4 fixed flex justify-end items-end w-full h-12 sm:h-16 top-0 z-20`}
    >
      <ul className="flex space-x-2 sm:space-x-4 h-fit w-fit items-end gap-[5px] sm:gap-[10px] rounded-br-[15px] sm:rounded-br-[20px] rounded-bl-[15px] sm:rounded-bl-[20px] border-y-[0.075rem] border-lime p-[6px] sm:p-[10px] backdrop-blur-[10px] sm:backdrop-blur-[15px] overflow-visible bg-cream font-Cinzel font-semibold">
        <li>
          <Link
            to="/"
            className={`${location.pathname === "/" ? "text-lime " : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${location.pathname === "/about" ? "text-lime " : ""}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`${
              location.pathname === "/projects" ? "text-lime " : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact" ? "text-lime " : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
