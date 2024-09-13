import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    // Close the navbar and scroll to the top of the page
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="fixed top-2 right-4 z-30 sm:top-0 sm:hidden">
        <button
          onClick={toggleNavbar}
          className="text-lime bg-none p-2 pt-0 rounded-md focus:outline-none"
        >
          {isOpen ? (
            "Close"
          ) : (
            <svg
              className="fill-cherry"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#D86072"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#D86072"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#D86072"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        className={`${
          isOpen
            ? " fixed inset-0 bg-gradient-to-tr from-lime via-cream to-lime"
            : "hidden"
        } sm:block fixed right-0 bg-none text-cherry p-2 sm:p-2 z-40 h-full sm:h-16 flex sm:justify-end sm:items-end`}
      >
        {isOpen && (
          <div className="absolute top-0 right-4 z-30 h-[32px]  w-[32px] font-bold ">
            <button
              onClick={toggleNavbar}
              className="text-cherry p-2 rounded-full focus:outline-none"
            >
              ✕
            </button>
          </div>
        )}

        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 h-full sm:h-fit w-full sm:w-fit justify-center items-center sm:items-end sm:justify-end gap-4 sm:gap-[10px] rounded-br-[15px] sm:rounded-br-[20px] rounded-bl-[15px] sm:rounded-bl-[20px] border-none sm:border-y-[0.075rem] sm:border-lime sm:p-[10px] sm:backdrop-blur-[15px] bg-cream sm:bg-transparent font-Cinzel font-semibold">
          <li>
            <Link
              to="/"
              className={`${location.pathname === "/" ? "text-lime " : ""}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about" ? "text-lime " : ""
              }`}
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
