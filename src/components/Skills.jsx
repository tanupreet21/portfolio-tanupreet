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
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center mb-16">
                Technical Skills
            </h2>
            <div className="grid md:grid-col-3 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -6 }}
                        className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-primary transition"
                    >
                        <div className="w-12 h-12 flex items-centre justify-center rounded-lg bg-primary/20 text-primary text-xl mb-4">
                            {skill.icon}
                        </div>
                        <div className="text-lg font-semibold mb-4">
                            {skill.title}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, i) =>(
                                <span
                                    key={i}
                                    className="text-sm bg-slate-700 px-3 py-1 rounded-full"
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