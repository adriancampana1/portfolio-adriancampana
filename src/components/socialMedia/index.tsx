import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const socialLinks = [
  { icon: <FiLinkedin />, label: "Linkedin", href: "#" },
  { icon: <FiInstagram />, label: "Instagram", href: "#" },
  { icon: <FiGithub />, label: "GitHub", href: "#" },
  { icon: <FiMail />, label: "E-mail", href: "#" },
];
export default function SocialMedia() {
  return (
    <section className="py-20 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-6">Contato</h2>
      <p className="mb-6">
        Gostou do meu trabalho? Entre em contato ou acompanhe as minhas redes
        sociais!
      </p>
      <div className="grid grid-cols-1 gap-4 w-full md:w-1/3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center justify-center gap-2 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
