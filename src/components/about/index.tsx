import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section className="md:py-20 px-10 bg-gray-950/30 w-full p-6 rounded-lg">
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>
          <p className="text-lg max-w-2xl">
            Sou um desenvolvedor full-stack apaixonado por criar soluções
            inovadoras. Com experiência em diversas tecnologias, transformo
            ideias em realidade por meio de um código eficiente e interfaces
            amigáveis. Tenho experiência em desenvolvimento web e mobile.
          </p>
        </div>

        <div className="flex justify-center md:mr-16 md:justify-end ">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#075985 " }} // Animação ao passar o mouse (hover)
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-4 bg-sky-950 hover:bg-sky-950/50 p-5 rounded-lg"
          >
            <FiFileText /> Baixar currículo
          </motion.button>
        </div>
      </div>
    </section>
  );
}
