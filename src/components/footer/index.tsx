"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuGithub, LuLinkedin, LuMail, LuChevronUp } from "react-icons/lu";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Adrian Campana
            </h3>
            <p className="text-gray-300">
              Transformando ideias em soluções digitais que fazem a diferença.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-semibold mb-4">Conecte-se</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
              >
                <LuGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
              >
                <LuLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
              >
                <LuMail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Adrian Campana. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </div>
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
            aria-label="Voltar ao topo"
          >
            <LuChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500"></div>
    </footer>
  );
}
