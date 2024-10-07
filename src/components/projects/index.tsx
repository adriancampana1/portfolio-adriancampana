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
import { projects, categories } from "./projectData";

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredCategory, setFilteredCategory] = useState("Todos");
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Índice atual do carrossel

  const selectedProject = projects.find((p) => p.id === selectedId);

  const filteredProjects =
    filteredCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === filteredCategory);

  const totalProjects = filteredProjects.length;

  const [visibleItems, setVisibleItems] = useState(3); // Padrão para desktop

  // Atualizar o número de itens visíveis com base na largura da tela
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        setVisibleItems(1);
      } else if (width < 1024) {
        // Tablet
        setVisibleItems(2);
      } else {
        // Desktop
        setVisibleItems(3);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  // Atualizar o índice máximo com base no número total de projetos e itens visíveis
  const maxIndex = Math.max(totalProjects - visibleItems, 0);

  // Funções para o carrossel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  useEffect(() => {
    // Resetar o índice atual quando a categoria filtrada mudar
    setCurrentIndex(0);
  }, [filteredCategory, visibleItems]);

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

  // Desabilitar scroll no body quando o modal estiver ativo
  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = "hidden"; // Desativa scroll
    } else {
      document.body.style.overflow = ""; // Reativa scroll
    }

    return () => {
      // Garante que o estilo seja restaurado quando o componente desmontar
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Meus projetos
        </h2>

        {/* Botões de Filtro de Categoria */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${
                filteredCategory === category
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setFilteredCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Verificar se precisamos do carrossel */}
        {totalProjects > visibleItems ? (
          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full z-10"
            >
              <LuChevronLeft className="w-6 h-6" />
            </button>
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  width: `${(totalProjects * 100) / visibleItems} / 2%`,
                }}
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    onClick={() => {
                      setSelectedId(project.id);
                      setCurrentImageIndex(0);
                    }}
                    className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                    whileHover={{ y: -10 }}
                    style={{
                      flex:
                        visibleItems === 1
                          ? "0 0 100%"
                          : `0 0 ${100 / visibleItems}%`,
                      maxWidth: visibleItems === 1 ? "100%" : "auto",
                    }}
                  >
                    {/* Atualizar para usar <picture> */}
                    <picture>
                      <source
                        media="(max-width: 640px)"
                        srcSet={project.images[0].mobile}
                      />
                      <source
                        media="(min-width: 641px)"
                        srcSet={project.images[0].desktop}
                      />
                      <img
                        src={project.images[0].desktop}
                        alt={project.title}
                        className="w-full h-48 object-cover pointer-events-none"
                      />
                    </picture>
                    <div className="p-6 pointer-events-none">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {project.shortDescription}
                      </p>
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
              </motion.div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full z-10"
            >
              <LuChevronRight className="w-6 h-6" />
            </button>
          </div>
        ) : (
          // Se não há projetos suficientes, mostrar os cards sem carrossel
          <div className="flex flex-wrap gap-4 justify-center">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => {
                  setSelectedId(project.id);
                  setCurrentImageIndex(0);
                }}
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                whileHover={{ y: -10 }}
                style={{ width: "300px" }}
              >
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet={project.images[0].mobile}
                  />
                  <source
                    media="(min-width: 641px)"
                    srcSet={project.images[0].desktop}
                  />
                  <img
                    src={project.images[0].desktop}
                    alt={project.title}
                    className="w-full h-48 object-cover pointer-events-none"
                  />
                </picture>
                <div className="p-6 pointer-events-none">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.shortDescription}
                  </p>
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
        )}

        {/* Modal */}
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
                className="bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full md:max-w-3xl lg:max-w-4xl max-h-[90vh] h-auto flex flex-col"
              >
                {/* Image Container */}
                <div className="relative flex-shrink-0">
                  <picture>
                    <source
                      media="(max-width: 640px)"
                      srcSet={selectedProject.images[currentImageIndex].mobile}
                    />
                    <source
                      media="(min-width: 641px)"
                      srcSet={selectedProject.images[currentImageIndex].desktop}
                    />
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProject.images[currentImageIndex].desktop}
                      alt={`${selectedProject.title} - Image ${
                        currentImageIndex + 1
                      }`}
                      className="w-full h-80 md:h-80 lg:h-96 object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </picture>
                  {/* Close Button and Navigation Buttons */}
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

                {/* Content Area */}
                <div className="p-4 md:p-6 overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-700">
                  <h3 className="text-2xl font-semibold text-white mb-2 md:mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-4 md:mb-6">
                    {selectedProject.longDescription}
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
                      <picture key={index}>
                        <source
                          media="(max-width: 640px)"
                          srcSet={image.mobile}
                        />
                        <source
                          media="(min-width: 641px)"
                          srcSet={image.desktop}
                        />
                        <motion.img
                          src={image.desktop}
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
                      </picture>
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
