import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="fixed bottom-0 w-full z-50 backdrop-blur bg-background/70 border-t border-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
        
        <div className="text-center md:text-left text-muted text-sm">
          &copy; {new Date().getFullYear()} Tanupreet Kaur
        </div>

        <div className="text-primary font-semibold text-sm hover:underline cursor-pointer">
          <a href="mailto:tanupreetkaur2106@gmail.com">Let's work together</a>
        </div>

        <div className="flex gap-5 text-2xl text-muted">
          <a href="mailto:tanupreetkaur2106@gmail.com" className="hover:text-primary transition">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/tanupreet-kaur-a34762193/" target="_blank" className="hover:text-primary transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tanupreet21" target="_blank" className="hover:text-primary transition">
            <FaGithub />
          </a>
        </div>

      </div>
    </motion.footer>
  );
}