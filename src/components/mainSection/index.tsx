import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
        <p className="text-2xl text-gray-400 mb-12">
          Desenvolvedor full-stack focado em entregar produtos de alta
          performance e qualidade.
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer border border-white px-6 py-2 mt-8 hover:bg-white hover:text-gray-900 transition-colors"
        >
          Meus projetos
        </Link>
      </motion.div>
    </section>
  );
}
