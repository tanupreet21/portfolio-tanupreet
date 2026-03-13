export default function Projects(){
    return(
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="mt-5">
                <h3 className="font-semibold">Capstone Project</h3>
                <p>
                NewCanadian – a full-stack system that connects newcomers to Canada to volunteer language buddies
                </p>
                <a href="https://github.com/yourgithub">
                GitHub Repository
                </a>
            </div>
            <div className="mt-5">
                <h3 className="font-semibold">Student Hub - Spring Boot Microservices</h3>
                <p>
                Built a containerized 3-microservices platform with REST APIs, Redis caching,
                OAuth2/Keycloak authentication, Swagger documentation, Resilience4j fault tolerance,
                and Kafka event-driven communication. 	
                </p>
                <a href="https://github.com/yourgithub">
                GitHub Repository
                </a>
            </div>
            <div className="mt-5">
                <h3 className="font-semibold">Employee Management System</h3>
                <p>
                Developed a complete employee management solution (Full-Stack MERN App)
                using Node.js, Express, React, and MongoDB with CRUD operations, search functionality,
                profile picture uploads, JWT authentication, and Docker deployment.
                </p>
                <a href="https://github.com/yourgithub">
                GitHub Repository
                </a>
            </div>
            <div className="mt-5">
                <h3 className="font-semibold">Finance Tracker</h3>
                <p>
                Built a personal finance application with Node.js, Express,
                and PostgreSQL to track income and expenses, featuring REST APIs,
                budget analysis, and responsive web UI.
                </p>
                <a href="https://github.com/yourgithub">
                GitHub Repository
                </a>
            </div>
        </section>
    );
}