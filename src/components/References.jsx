import { motion } from "framer-motion";
import { FaUserTie, FaDownload } from "react-icons/fa";

const references = [
    {
        name: "Wayne Brown",
        role: "Professor",
        organization: "Georgian College",
        letter:"/ReferenceLetter.pdf"
    },
    {
        name:"Anchit Jain",
        role: "Director of Operations",
        organization: "Eyelit Technologies",
        letter: null
    },
    {
        name:"Natalie Sarbiou",
        role: "Business Analyst",
        organization: "Eyelit Technologies",
        letter: null
    }
];


export default function References() {
    return(
        <section id="references" className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-center mb-6" text-centre mb-6>References</h2>
            <p className="text-centre text-muted mb-12">
            Professional references available upon request.
            </p>   

            <div className="grid md:grid-cols-3 gap-8">
                {references.map((ref,index) =>(
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-center flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex justify-center mb-4 text-primary text-xl">
                                <FaUserTie/>
                            </div>
                            <h3 className="font-semibold text-lg">{ref.name}</h3>
                            <p className="text-sm text-muted">{ref.role}</p>
                            <p className="text-sm text-muted">{ref.organization}</p>
                        </div>
                        {ref.letter ? (
                            <a
                                href={ref.letter}
                                download
                                className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover;bg-primary/80 transition"
                            >
                                <FaDownload/> Download Letter
                            </a>
                        ) : (
                            <span className="mt-4 text-xs text-muted italic">
                                Available upon request
                            </span>
                        )}

                    </motion.div>
                ))}
            </div>
      </section>
    );
}