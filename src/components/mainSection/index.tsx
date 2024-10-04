import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <section className="md:pt-0 md:justify-center py-20 flex flex-col justify-start items-start min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transformo ideias em{" "}
          <span className="text-gradient">soluções digitais</span> que fazem a
          diferença.
        </h1>
        <p className="text-2xl text-gray-400 mb-8">
          Desenvolvedor full-stack focado em entregar produtos de alta
          performance e qualidade.
        </p>

        {/* Botão de Visualizar Projetos com Animação */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#6B7280", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="border border-white px-6 py-2 mt-4 hover:bg-white hover:text-gray-900 transition-colors"
        >
          Ver Projetos
        </motion.button>
      </motion.div>
    </section>
  );
}
