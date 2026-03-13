import { motion } from "framer-motion";

export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full z-50 backdrop-blur bg-background/70 border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

                <motion.a
                    href="#home"
                    className="text-2xl font-bold text-primary"
                    whileHover={{ scale: 1.1}}
                >
                    <span className="flex items-center justify-center w-10 h-10 border border-primary text-primary font-bold rounded-full">
                        TK
                    </span>
                </motion.a>
                <ul className="flex gap-10 text-sm md:text-base text-muted">
                    <li>
                        <a href="#home" className="hover:text-primary transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-primary transition">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-primary transition">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-primary transition">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#achievements" className="hover:text-primary transition">
                            Achievements
                        </a>
                    </li>
                    <li>
                        <a href="#references" className="hover:text-primary transition">
                            References
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}