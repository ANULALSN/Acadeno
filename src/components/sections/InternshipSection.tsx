"use client";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const programs = [
    {
        title: "3-Month Internship",
        subtitle: "FOR BEGINNERS & EXPLORERS",
        points: ["Strong Fundamentals", "One Real-World Project", "Certificate of Completion"],
        color: "cyan"
    },
    {
        title: "6-Month Internship",
        subtitle: "FOR CAREER SWITCHERS",
        points: ["Advanced Concepts", "Three Live Projects", "Placement Assistance"],
        color: "violet"
    },
    {
        title: "1-Year Fellowship",
        subtitle: "FOR FUTURE LEADERS",
        points: ["Full Stack Mastery", "Lead a Team", "Guaranteed Job Interview"],
        color: "cyan"
    }
];

export default function InternshipSection() {
    return (
        <section className="min-h-[60vh] py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet-500">
                Internship Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((prog, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="perspective-1000"
                    >
                        <GlassCard className="h-full p-8 flex flex-col gap-6 group" hoverEffect>
                            <div>
                                <h3 className={`text-2xl font-bold text-${prog.color}`}>{prog.title}</h3>
                                <p className="text-xs tracking-widest text-white/50 mt-1">{prog.subtitle}</p>
                            </div>
                            <ul className="space-y-3 flex-1">
                                {prog.points.map((pt, j) => (
                                    <li key={j} className="flex items-center gap-3 text-white/80">
                                        <div className={`w-1.5 h-1.5 rounded-full bg-${prog.color}`} />
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-3 rounded-xl border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors text-sm font-semibold">
                                View Details
                            </button>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
