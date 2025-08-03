import React, { useState } from "react";
import "./index.css"; // Import Tailwind CSS styles
import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Header from "./sections/Header";
import Photo from "/images/photo.jpg";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume"; // Import Resumé component if needed
import Contact from "./sections/Contact";

export default function App() {
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);

  const togglePhotoExpansion = () => {
    setIsPhotoExpanded(!isPhotoExpanded);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans antialiased dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 dark:text-gray-200">
      <Header />

      <section
        id="about"
        className="flex flex-col items-center justify-center min-h-[75vh] px-6 py-20"
      >
        <div className="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 rounded-3xl p-10 shadow-xl max-w-sm text-center">
          <img
            src={Photo}
            alt="Remigiusz Szabłowski"
            // Dodano cursor-pointer, aby wskazać, że można kliknąć
            onClick={togglePhotoExpansion}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-400 cursor-pointer transition-all duration-300 transform hover:scale-110"
          />
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
            Remigiusz Szabłowski
          </h1>
          <p className="text-gray-700 dark:text-gray-400 max-w-xs mx-auto">
            I'm a Polish Student with huge ambition and amazing sense of humor. Database Manager and Website developer
          </p>

          <div className="flex justify-center space-x-6 mt-6 text-cyan-600 dark:text-cyan-400 text-3xl">
            <a href="https://github.com/remuwson" aria-label="GitHub" className="hover:text-cyan-800 dark:hover:text-cyan-600">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100015056496045" aria-label="FaceBook" className="hover:text-cyan-800 dark:hover:text-cyan-600">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/r_szablowski/" aria-label="Instagram" className="hover:text-cyan-800 dark:hover:text-cyan-600">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@remuuwa_7990" aria-label="YouTube" className="hover:text-cyan-800 dark:hover:text-cyan-600">
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>

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
