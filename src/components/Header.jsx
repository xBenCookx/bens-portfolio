import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            Ben Cook
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["/", "/portfolio", "/contact", "/resume"].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`text-gray-600 hover:text-blue-600 transition-colors ${
                  location.pathname === path ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {path.substring(1).toUpperCase() || "ABOUT"}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2">
            {["/", "/portfolio", "/contact", "/resume"].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`block py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors ${
                  location.pathname === path ? "bg-gray-50 text-blue-600 font-semibold" : ""
                }`}
                onClick={toggleMenu}
              >
                {path.substring(1).toUpperCase() || "ABOUT"}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
