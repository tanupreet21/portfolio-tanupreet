import { motion } from "framer-motion";
import { FaGraduationCap, FaEye } from "react-icons/fa";

const documents = [
  {
    title: "Advanced Diploma – Computer Programming & Analysis",
    school: "George Brown College",
    file: "/DeanLetter_GeorgeBrownCollege.pdf"
  },
  {
    title: "Computer Programmer Diploma",
    school: "Georgian College",
    file: "GeorgianCollegeDegree.pdf"
  },
  {
    title: "React Essential Training",
    school: "Linkedin Learning",
    file: "ReactCertificate.png"
  },
  {
    title: "Java Essentials",
    school: "Linkedin Learning",
    file: "JavaCertificate.png"
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-16">
        Education & Certifications
      </h2>

      <div className="space-y-6">

        {documents.map((doc, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate-800/60 border border-slate-700 rounded-xl p-5"
          >

            <div className="flex items-start gap-4">
              <FaGraduationCap className="text-primary text-xl mt-1" />

              <div>
                <h3 className="font-semibold">{doc.title}</h3>
                <p className="text-sm text-muted">{doc.school}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">

              <a
                href={doc.file}
                target="_blank"
                className="flex items-center gap-2 text-sm border border-slate-600 px-4 py-2 rounded-lg hover:border-primary transition"
              >
                <FaEye /> View 
              </a>

 

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}