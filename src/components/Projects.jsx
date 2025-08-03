import React from 'react';

const projects = [
  {
    title: "BoomBat",
    description:
      "BoomBat - Game service based on points which you can get daily by playing a mini clicker game, mining points (based on crypto mining) and wathcing ads",
    img: "images/batclicker.png",
    link: "https://github.com/BoomBat-esmovia",
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with payment integration and user dashboard.",
    img: "/images/project2.jpg",
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "Portfolio website showcasing design skills and coding projects.",
    img: "/images/project3.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-16">
      {/* Tytuł jest ciemny w trybie jasnym, a biały w trybie ciemnym */}
      <h2 className="text-4xl font-semibold mb-12 text-center text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
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
    </section>
  );
};

export default Projects;
