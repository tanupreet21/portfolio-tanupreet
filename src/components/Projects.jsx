import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "NewCanadian (Capstone Project)",
        description: "A full-stack platform that connects newcomers to Canada with volunteer language buddies. The system enables users to register, match with volunteers, and communicate through an intuitive interface",
        tech: ["React", "Node.js", "Express", "REST APIs", "PostgreSQL", "CSS"],
        github: "https://github.com/tanupreet21/CapstoneProject_NewCanadian",
        projectDocs: "https://github.com/tanupreet21/CapstoneProject_ProjectManagementDocs"
    },
    {
        title: "Student Hub – Spring Boot Microservices",
        description:
          "A containerized microservices platform featuring REST APIs, Redis caching, OAuth2/Keycloak authentication, Swagger documentation, Resilience4j fault tolerance, and Kafka-based event communication.",
        tech: [
          "Java",
          "Spring Boot",
          "Kafka",
          "Redis",
          "Docker",
          "OAuth2",
          "Microservices",
        ],
        github: "https://github.com/tanupreet21/StudentHub_SpringBoot",
        projectDocs: null
    },
    {
        title: "Employee Management System",
        description:
          "A full-stack MERN application for managing employee records with authentication, CRUD operations, search functionality, profile image uploads, and Docker-based deployment.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Docker"],
        github: "https://github.com/tanupreet21/EmployeeManagementSystem",
        projectDocs: null
      },
];

export default function Projects(){
    return(
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
    
            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -8}}
                        className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-primary transition"
                    >
                       <h3 className="text-xl font-semibold mb-3">
                            {project.title}
                        </h3> 
                        <p className="text-muted mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-slate-700 px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div 
                        className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-primary hover:underline"
                            >
                                <FaGithub />
                                View Code
                            </a>
                            { project.projectDocs ? (
                                    <a
                                        href={project.projectDocs}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-primary hover:underline"
                                    >
                                        <FaEye />View Docs
                                    </a>
                            ): (null)
                            }

                        </div>
                    </motion.div>
                ))}
            </div>
           
        </section>
    );
}