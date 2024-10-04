import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

// Variantes de animação para o menu
const menuVariants: Variants = {
  open: {
    clipPath: "circle(1000px at 90% 40px)",
    transition: {
      type: "spring",
      stiffness: 30,
      duration: 0.8,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "circle(0px at 90% 40px)", // Define o círculo com raio 0 quando fechado
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative z-50"
    >
      {/* Botão para abrir/fechar o menu */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 text-white relative z-50"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </motion.button>

      {/* Menu de navegação */}
      <motion.ul
        variants={menuVariants}
        initial="closed" // Inicializa o menu como fechado
        className={`absolute top-12 right-0 w-[300px] bg-gray-800 p-6 text-white rounded-lg shadow-lg ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <motion.li
          variants={itemVariants}
          className="my-4 p-2 text-lg hover:bg-gray-700 rounded-md"
        >
          Item 1
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="my-4 p-2 text-lg hover:bg-gray-700 rounded-md"
        >
          Item 2
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="my-4 p-2 text-lg hover:bg-gray-700 rounded-md"
        >
          Item 3
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="my-4 p-2 text-lg hover:bg-gray-700 rounded-md"
        >
          Item 4
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="my-4 p-2 text-lg hover:bg-gray-700 rounded-md"
        >
          Item 5
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Menu;
