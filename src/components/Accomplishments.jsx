import { motion } from "framer-motion";

const accomplishments = [
    {
      metric: "30%",
      title: "Performance Improvement",
      description:
        "Optimized SQL queries and database indexing strategies, improving application performance by approximately 30%."
    },
    {
      metric: "85%+",
      title: "Automated Test Coverage",
      description:
        "Implemented unit, integration, and end-to-end tests using Jasmine, Karma, and Cypress to reduce regression risk."
    },
    {
      metric: "CI/CD",
      title: "Deployment Automation",
      description:
        "Supported CI/CD pipelines using GitHub Actions and Maven and deployed containerized services using Docker."
    },
    {
      metric: "Enterprise",
      title: "Full-Stack Systems",
      description:
        "Designed and maintained enterprise-scale applications using Java, Spring Boot, Angular, React, and REST APIs."
    }
  ];

export default function Accomplishments() {
    return(
        <section id="impact" className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-center mb-16">Professional Impact</h2>
            <div className="grid md:grid-cols-4 gap-10 text-center">
            {accomplishments.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl font-bold text-primary mb-3">
              {item.metric}
            </div>

            <h3 className="font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-muted">
              {item.description}
            </p>
          </motion.div>
        ))}

            </div>
        </section>
    );
}