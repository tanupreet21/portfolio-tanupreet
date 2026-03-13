import { motion } from "framer-motion";
import { FaBriefcase, FaBullseye, FaUser } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="bg-slate-900">
            <div className="max-w-6xl mx-auto px-6 py-24">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6}}
                >
                    About me
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-surface border border-slate-700 rounded-xl p-6 shadow-lg"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 30}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center mb-4 gap-3">
                        <FaBriefcase className="text-primary text-2xl" />
                        <h3 className="text-xl font-semibold text-primary">Career Summary</h3>
                        </div>
                        <p className="text-muted leading-relaxed">
                        Full-stack software developer with experience building scalable
                        web applications using modern frameworks and backend services.
                        I enjoy transforming complex business requirements into intuitive
                        digital solutions. My experience includes building responsive
                        interfaces, integrating APIs, and optimizing databases. I focus
                        on writing maintainable code and delivering reliable applications
                        while continuously learning new technologies.
                        </p>

                    </motion.div>
                    <motion.div
                        className="bg-surface border border-slate-700 rounded-xl p-6 shadow-lg"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center mb-4 gap-3">
                        <FaBullseye className="text-primary text-2xl" />
                        <h3 className="text-xl font-semibold text-primary">Mission</h3>
                        </div>

                        <p className="text-muted leading-relaxed">
                        My mission is to create reliable and intuitive software that
                        solves real-world problems while delivering meaningful and
                        efficient user experiences through thoughtful design and clean
                        engineering practices.
                        </p> 
                    </motion.div>
                    <motion.div
                        className="bg-surface border border-slate-700 rounded-xl p-6 shadow-lg"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center mb-4 gap-3">
                        <FaUser className="text-primary text-2xl" />
                        <h3 className="text-xl font-semibold text-primary">Biography</h3>
                        </div>

                        <p className="text-muted leading-relaxed mb-3">
                        I am a software developer who enjoys solving complex problems and
                        building applications that provide real value to users. I believe
                        effective software development requires strong collaboration,
                        clear communication, and thoughtful design.
                        </p>

                        <p className="text-muted leading-relaxed">
                        Through academic and project experience, I have collaborated with
                        teams to design and implement full-stack applications while
                        focusing on maintainable code and delivering reliable solutions.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}