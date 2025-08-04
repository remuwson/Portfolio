import React from 'react';
import useOnScreen from '../Scripts/useOnScreen'; // Upewnij się, że ścieżka jest poprawna
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiFigma } from 'react-icons/si';

// Dane o technologiach, łatwe do modyfikacji
const techStacks = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-600" /> },
    ],
  },
];

const TechStack = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="techstack" className="max-w-7xl mx-auto px-6 py-16 flex flex-col">
      <div
        ref={ref}
        className={`fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="text-4xl font-semibold mb-12 text-center text-gray-900 dark:text-white">
          My Tech Stacks
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {techStacks.map((stack, index) => (
            <div
              key={stack.category}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6
                          transform hover:scale-105 transition-transform duration-300
                          w-full max-w-sm flex flex-col
                          ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                {stack.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stack.technologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="text-4xl mb-2">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;