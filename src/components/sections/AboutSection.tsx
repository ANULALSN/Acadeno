"use client";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowRight, Cpu, Globe, Users, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <motion.section
            ref={containerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full min-h-[80vh] mb-20"
        >
            {/* Large Tile - 60% approx (8/12 cols) */}
            <GlassCard className="md:col-span-8 p-10 flex flex-col justify-center gap-6" hoverEffect>
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet-500">
                        Where AI Builds Future Leaders
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
                        Personalised tech training, AI-driven learning, and industry-focused internships designed to make you future-ready, job-ready, and confident.
                    </p>
                </div>

                {/* Differentiators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[
                        { icon: Cpu, label: "AI-Integrated Platform" },
                        { icon: Zap, label: "Real-Time Projects" },
                        { icon: Users, label: "95% Placement Rate" },
                        { icon: Globe, label: "10+ Industry Partners" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                            <item.icon className="w-8 h-8 text-cyan" />
                            <span className="text-xs font-semibold text-white/90">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mt-6">
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold tracking-wide shadow-lg shadow-cyan/20 hover:scale-105 transition-transform flex items-center gap-2">
                        Apply Now <ArrowRight size={18} />
                    </button>
                    <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition-colors">
                        Book Consultation
                    </button>
                </div>
            </GlassCard>

            {/* Right Column - Two Stacked Tiles */}
            <motion.div style={{ y }} className="md:col-span-4 flex flex-col gap-6">
                <GlassCard className="flex-1 p-8 flex flex-col justify-center gap-2" hoverEffect>
                    <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center mb-2">
                        <Zap className="text-cyan w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Transforming Passion Into Profession</h3>
                    <p className="text-white/60 text-sm">Turning code into careers with hands-on expertise.</p>
                </GlassCard>

                <GlassCard className="flex-1 p-8 flex flex-col justify-center gap-2" hoverEffect>
                    <div className="w-12 h-12 rounded-full bg-violet/20 flex items-center justify-center mb-2">
                        <Globe className="text-violet w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Story</h3>
                    <p className="text-white/60 text-sm">Evolving to Acadeno: The next evolution in EdTech.</p>
                </GlassCard>
            </motion.div>
        </motion.section>
    );
}
