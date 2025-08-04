import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white/50 dark:bg-gray-900/50 transition-colors duration-500`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl text-gray-800 dark:text-gray-100">
          <a href="/Portfolio/" className="hover:text-cyan-600 transition-colors">
            Remy
          </a>
        </div>

        {/* Menu na desktop w nowym stylu kafelków */}
        <nav className="hidden md:flex space-x-2 items-center">
          {["About", "Work", "Resumé", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium
                          bg-gray-200 dark:bg-gray-700 rounded-md
                          hover:bg-cyan-600 dark:hover:bg-cyan-400
                          hover:text-white dark:hover:text-white
                          transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="text-xl px-4 py-2 text-gray-700 dark:text-gray-300 font-medium
                         bg-gray-200 dark:bg-gray-700 rounded-md
                         hover:bg-cyan-600 dark:hover:bg-cyan-400
                         hover:text-white dark:hover:text-white
                         transition-colors duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Przycisk menu hamburger tylko na mobile */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors md:hidden"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Overlay - tło które przyciemnia resztę strony, gdy menu jest otwarte */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/75 z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobilne menu boczne */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white dark:bg-gray-900 shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6">
         
          <div className="flex justify-end mb-4">

            {/* Przycisk zamykania menu wewnątrz panelu bocznego */}
            <button
              onClick={closeMenu}
              aria-label="Close mobile menu"
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              <FaTimes />
            </button>
            </div>
          <nav className="flex flex-col space-y-4">
            {["About", "Work", "Resumé", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="
                  text-xl text-gray-800 dark:text-gray-200 
                  hover:text-cyan-600 dark:hover:text-cyan-400 
                  transition-colors 
                  border-b border-gray-200 dark:border-gray-700 
                  pb-2
                  bg-gray-200 dark:bg-gray-700
                  rounded-md
                  px-4
                "
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
