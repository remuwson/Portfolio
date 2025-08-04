import React from 'react';
import useOnScreen from '../Scripts/useOnScreen'; // Import the custom hook for scroll animation

const projects = [
  {
    title: "BoomBat",
    description:
      "BoomBat - Game service based on points which you can get daily by playing a mini clicker game, mining points (based on crypto mining) and wathcing ads",
    img: "images/batclicker.png",
    link: "https://github.com/BoomBat-esmovia",
  },
  {
    title: "PyknijMy",
    description:
      "A WebApp which help you to find your new sport's friend. You can find a special event, create your own event or just find a people who want to play with you.",
    img: "images/ikonka_pyknijmy.png",
    link: "https://github.com/niedlich3/PyknijMy",
  },
];

const Projects = () => {
  // Use the custom hook to track if the element is visible on screen
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-16 flex flex-col">
      {/* The main container for the animated content. We use the ref here. */}
      {/* We apply the animation classes conditionally based on the isVisible state. */}
      <div
        ref={ref}
        className={`fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        {/* Tytuł jest ciemny w trybie jasnym, a biały w trybie ciemnym */}
        <h2 className="text-4xl font-semibold mb-12 text-center text-gray-900 dark:text-white">
          Projects
        </h2>
        {/* Użycie flexboxa do wyśrodkowania elementów. Usunięto klasy grid. */}
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map(({ title, description, img, link }) => (
            <a
              href={link}
              key={title}
              // Karta projektu ma jasne tło w trybie jasnym i ciemne w trybie ciemnym
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                              transform hover:scale-105 transition-transform duration-300
                              w-full max-w-sm flex justify-center flex-col items-center"
            >
              <img
                src={img}
                alt={title}
                className="w-48 h-48 object-cover justify-center align-center"
              />
              <div className="p-5 text-left">
                {/* Tytuł projektu jest ciemny w trybie jasnym, a biały w trybie ciemnym */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">{title}</h3>
                {/* Opis projektu jest ciemny w trybie jasnym i jaśniejszy w trybie ciemnym */}
                <p className="text-gray-700 dark:text-gray-400">
                  {description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
