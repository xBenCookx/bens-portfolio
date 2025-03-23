import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white p-6 md:p-8 shadow-lg rounded-b-2xl">
      <div className="container mx-auto flex justify-between items-center tracking-wide antialiased">
        {/* Logo/Name */}
        <Link to="/" className="text-3xl md:text-4xl text-gray-800 font-bold cursor-pointer">
          Ben Cook
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {["/", "/portfolio", "/contact", "/resume"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`hover:text-blue-500 ${
                location.pathname === path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {path.substring(1).toUpperCase() || "ABOUT"}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden bg-gray-100 rounded-xl shadow-md mt-4 text-center`}
      >
        {["/", "/portfolio", "/contact", "/resume"].map((path, index) => (
          <Link
            key={index}
            to={path}
            className="block py-3 text-gray-800 hover:bg-gray-200 transition"
            onClick={toggleMenu}
          >
            {path.substring(1).toUpperCase() || "ABOUT"}
          </Link>
        ))}
      </div>
    </header>
  );
}
