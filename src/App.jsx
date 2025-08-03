import React from "react";
import Header from "./components/Header";
import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Photo from "/images/photo.jpg";
import Projects from "./components/Projects";
import "./index.css"; // Import Tailwind CSS styles
import Resume from "./components/Resume"; // Import Resumé component if needed
import Contact from "./components/Contact";

export default function App() {
  return (
    // Główny kontener aplikacji z obsługą motywu jasnego (domyślny) i ciemnego
    // W trybie jasnym tło to bg-gray-100, a tekst to text-gray-900
    // W trybie ciemnym tło przechodzi w gradient
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans antialiased dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 dark:text-gray-200">
      <Header />

      {/* Sekcja główna z kafelkiem - ABOUT */}
      <section
        id="about"
        className="flex flex-col items-center justify-center min-h-[75vh] px-6 py-20"
      >
        {/* Kontener ABOUT ma białe tło w trybie jasnym i ciemnoszare w trybie ciemnym */}
        <div className="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 rounded-3xl p-10 shadow-xl max-w-sm text-center">
          <img
            src={Photo}
            alt="Remigiusz Szabłowski"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-400"
          />
          {/* Tytuł ma ciemny kolor w trybie jasnym, a biały w trybie ciemnym */}
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
            Remigiusz Szabłowski
          </h1>
          <p className="text-gray-700 dark:text-gray-400 max-w-xs mx-auto">
            I'm a Polish Student with huge ambition and amazing sense of humor. Database Manager and Website developer
          </p>

          {/* Kolory ikon zmieniają się w zależności od motywu */}
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

      {/* Sekcja projektów - WORK - teraz jako oddzielny komponent */}
      <Projects />


      {/* Sekcja CV - RESUME */}
      <Resume />

      {/* Sekcja kontaktu - CONTACT */}
     <Contact />
    </div>
  );
}
