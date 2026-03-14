import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaCloud, FaVial, FaCode } from "react-icons/fa";

const skills = [
    {
        title: "Frontend",
        icon: <FaLaptopCode />,
        items: ["Angular", "React", "TypeScript", "RxJS", "NgRx", "HTML5", "CSS3", "SASS"]
    },
    {
        title: "Backend & APIs",
        icon: <FaServer />,
        items: ["Java", "Spring Boot", "Node.js", "Express", "REST APIs", "JPA", "Hibernate"]
    },
    {
        title: "Databases",
        icon: <FaDatabase />,
        items: ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "SQL Server"]
    },
    {
        title: "DevOps & Cloud",
        icon: <FaCloud />,
        items: ["Docker", "GitHub Actions", "CI/CD", "Maven", "AWS", "Azure", "Kubernetes"]
    },
    {
        title: "Testing",
        icon: <FaVial />,
        items: ["JUnit", "Cypress", "Jasmine", "Karma", "Integration Testing"]
    },
    {
        title: "Languages",
        icon: <FaCode />,
        items: ["Java", "TypeScript", "JavaScript", "SQL", "Python", "C#"]
    }
];
export default function Skills(){
    return(
        <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-4xl font-bold text-center mb-16">
                Technical Skills
            </h2>
            <div className="space-y-10">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="text-primary text-xl">
                                {skill.icon}
                            </div>

                            <h3 className="text-lg font-semibold">
                                {skill.title}
                            </h3>
                            </div>
                        <div className="flex flex-wrap gap-3">
                            {skill.items.map((item, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 text-sm bg-slate-800 border border-slate-700 rounded-lg hover:border-primary transition"
                            >
                                {item}
                            </span>
                            ))}
                        </div>
                        
                    </motion.div>
                ))}
            </div>
        </section>
    );
}