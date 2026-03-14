import { motion } from "framer-motion";
import { FaTrophy, FaGraduationCap, FaCode, FaHandsHelping } from "react-icons/fa";

const achievements = [
    {
      icon: <FaTrophy />,
      title: "Dean's List",
      description: "Recognized for outstanding academic performance at George Brown College and Georgian College."
    },
    {
      icon: <FaGraduationCap />,
      title: "Top 10% Academic Standing",
      description: "Graduated with academic performance ranking among the top students in the program."
    },
    {
      icon: <FaCode />,
      title: "100+ LeetCode Problems Solved",
      description: "Practiced data structures and algorithms through consistent problem solving."
    },
    {
      icon: <FaHandsHelping />,
      title: "Volunteer Tour Guide",
      description: "Supported campus tours at Georgian College, helping prospective students navigate the campus."
    }
];

export default function Achievements() {
    return(
        <section id="achievements" className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-center mb-16">Awards & Honors</h2>

            <div className="relative border-l border-slate-700 space-y-12">

                {achievements.map((item, index) => (
                <motion.div
                    key={index}
                    className="ml-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >

                    <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white">
                    {item.icon}
                    </span>

                    <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                    </h3>

                    <p className="text-muted text-sm">
                    {item.description}
                    </p>

                </motion.div>
                ))}
            </div>
        </section>
    );
}