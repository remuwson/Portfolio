import React from 'react';
import useOnScreen from '../Scripts/useOnScreen';

const projects = [
  {
    title: "BoomBat",
    description:
      "BoomBat - Game service based on points which you can get daily by playing a mini clicker game, mining points (based on crypto mining) and wathcing ads",
    img: "images/boombat.png",
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
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-16 flex flex-col">
      <div ref={ref}>
        <h2 className="text-4xl font-semibold mb-12 text-center text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={project.title}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                          transform hover:scale-105 transition-transform duration-300
                          w-full max-w-sm flex justify-center flex-col items-center
                          ${isVisible ? (index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-55 h-55 object-cover justify-center align-center"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {project.description}
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