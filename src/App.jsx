import React, { useState } from "react";
import "./index.css"; // Import Tailwind CSS styles
import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Header from "./sections/Header";
import Photo from "/images/photo.jpg";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume"; // Import Resumé component if needed
import Contact from "./sections/Contact";
import About from "./sections/About";

export default function App() {
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);

  const togglePhotoExpansion = () => {
    setIsPhotoExpanded(!isPhotoExpanded);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans antialiased dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 dark:text-gray-200">
      <Header />

      <About />

      <Projects />
      <Resume />
      <Contact />

      {/* Warunkowe renderowanie: modal wyświetla się, gdy isPhotoExpanded jest true */}
      {isPhotoExpanded && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex justify-center items-center p-4 cursor-zoom-out"
          onClick={togglePhotoExpansion}
        >
          <img
            src={Photo}
            alt="Powiększone zdjęcie Remigiusza Szabłowskiego"
            className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl animate-fade-in"
          />
        </div>
      )}
    </div>
  );
}
