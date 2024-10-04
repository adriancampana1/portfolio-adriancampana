"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuChevronRight,
  LuExternalLink,
  LuGithub,
  LuChevronLeft,
  LuXCircle,
} from "react-icons/lu";
import placeholder from "../../assets/placeholder.svg";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-project",
    images: [
      placeholder.src,
      placeholder.src,
      placeholder.src,
      placeholder.src,
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app for managing tasks, projects, and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Vuex"],
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/username/task-manager",
    images: [
      placeholder.src,
      placeholder.src,
      placeholder.src,
      placeholder.src,
    ],
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    description:
      "Real-time weather information and forecasts using external API integration.",
    technologies: ["React", "Redux", "OpenWeatherMap API"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    images: [
      placeholder.src,
      placeholder.src,
      placeholder.src,
      placeholder.src,
    ],
  },
];

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedId(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    if (selectedId !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedId]);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Meus projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => {
                setSelectedId(project.id);
                setCurrentImageIndex(0);
              }}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
              whileHover={{ y: -10 }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover pointer-events-none"
              />
              <div className="p-6 pointer-events-none">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-sm text-white rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div
                ref={modalRef}
                className="bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full md:max-w-3xl lg:max-w-4xl h-auto md:h-auto lg:h-auto"
              >
                <div className="relative">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${
                      currentImageIndex + 1
                    }`}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-2 right-2 md:top-4 md:right-4 text-white bg-gray-900 rounded-full p-2"
                  >
                    <LuXCircle className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-gray-900 rounded-full p-2 md:left-4"
                  >
                    <LuChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-gray-900 rounded-full p-2 md:right-4"
                  >
                    <LuChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2 md:mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-4 md:mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-sm text-white rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mb-4 md:mb-6">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
                    >
                      <LuExternalLink className="w-4 h-4" />
                      Ver Projeto
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                    >
                      <LuGithub className="w-4 h-4" />
                      Código Fonte
                    </a>
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((image, index) => (
                      <motion.img
                        key={index}
                        src={image}
                        alt={`${selectedProject.title} - Thumbnail ${
                          index + 1
                        }`}
                        className={`w-16 h-16 object-cover rounded cursor-pointer ${
                          index === currentImageIndex
                            ? "ring-2 ring-teal-500"
                            : ""
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
