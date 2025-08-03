import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    // Sprawdzamy stan localStorage natychmiast przy inicjalizacji
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // Ten jedyny useEffect zajmuje się zarówno ładowaniem, jak i zapisywaniem motywu
  useEffect(() => {
    // Przy montowaniu komponentu, ustawiamy początkową klasę na <html>
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]); // Efekt uruchomi się przy każdej zmianie stanu darkMode.

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Zapisujemy nowy stan do localStorage
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 transition-colors duration-500`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl text-gray-800 dark:text-gray-100">
          <a href="/Portfolio/" className="hover:text-cyan-600 transition-colors">
            Remy 
          </a>
        </div>

        {/* Menu na desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["About", "Work", "Blog", "Resumé", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Przyciski i przełącznik trybu na desktop i mobile */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          {/* Przycisk menu hamburger tylko na mobile */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobilne menu boczne */}
        <div
          className={`fixed inset-y-0 right-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-6">
            <nav className="flex flex-col space-y-4 pt-16">
              {["About", "Work", "Blog", "Resumé", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
