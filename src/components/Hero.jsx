import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Hero(){
    return(
        <section id="home" className="pt-32 max-w-6xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 items-center gap-12">
                <div>
                    <motion.h1
                        className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4"
                        initial={{ opacity: 0, y: -30}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.7}}
                    >
                        Tanupreet Kaur
                    </motion.h1>
                    <motion.p
                        className="text-xl text-primary mb-4"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 0.3}}
                    >
                        Full-Stack Software Developer
                    </motion.p>
                    <motion.p
                        className="text-muted mb-6"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 0.5}}
                    >
                        Building scalable web applications with modern technologies and
                        creating intuitive user experiences.
                    </motion.p>

                    <motion.div
                        className="flex gap-4 mb-6"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 0.7}}
                    >
                        <button className="bg-primary hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition">
                            View Projects
                        </button>
                        <button className="border border-slate-600 hover:border-primary px-6 py-3 rounded-lg transition">
                            Contact Me
                        </button>
                    </motion.div>
                    <motion.div
                        className="flex gap-5 text-2xl text-muted"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 0.9}}
                    >
                        <a
                            href="mailto:tanupreetkaur2106@gmail.com"
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-primary transition"
                        >
                            <FaEnvelope/>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/tanupreet-kaur-a34762193/"
                            target="_blank"
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-primary transition"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/tanupreet21"
                            target="_blank"
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-primary transition"
                        >
                            <FaGithub/>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="flex justify-center"
                    intitial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7}}
                >
                    <img
                        src={profile}
                        alt="Tanupreet Kaur"
                        className="w-64 h-64 rounded-full object-cover border-4 border-primary shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                    />

                </motion.div>
            </div>
        </section>
    );
}