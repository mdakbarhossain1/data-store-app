import { useState } from "react";
import { FiMenu, FiX, FiArrowRight, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-background text-foreground shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">MyLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-primary transition">
              About
            </a>
            <a href="#help" className="hover:text-primary transition">
              Help
            </a>
            <a href="#features" className="hover:text-primary transition">
              Features
            </a>
            <a href="#signup" className="hover:text-primary transition">
              Sign Up
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-md bg-primary text-white hover:shadow-lg transition"
            >
              Request Demo <FiArrowRight />
            </a>

            {/* Dark/Light Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background shadow-lg rounded-b-xl px-6 py-4 space-y-4">
          <a href="#about" className="block hover:text-primary">
            About
          </a>
          <a href="#help" className="block hover:text-primary">
            Help
          </a>
          <a href="#features" className="block hover:text-primary">
            Features
          </a>
          <a href="#signup" className="block hover:text-primary">
            Sign Up
          </a>
          <a
            href="#demo"
            className="block w-full text-center px-4 py-2 rounded-lg shadow-md bg-primary text-white hover:shadow-lg transition"
          >
            Request Demo
          </a>

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mt-2 w-full flex justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
