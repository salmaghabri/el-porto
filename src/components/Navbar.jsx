import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav
      className={`bg-none right-0  text-cherry p-4 fixed flex justify-end items-end w-full h-16 top-0 z-20`}
    >
      <ul className="flex space-x-4 h-fit w-fit min-w-0 items-end gap-[10px] rounded-br-[20px] rounded-bl-[20px] border-y-[0.075rem] border-lime p-[10px] backdrop-blur-[15px] overflow-visible bg-cream font-Vioda">
        <li>
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "text-lime font-bold" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${
              location.pathname === "/about" ? "text-lime font-bold" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`${
              location.pathname === "/projects" ? "text-lime font-bold" : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact" ? "text-lime font-bold" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
