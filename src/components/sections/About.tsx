"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Rocket } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-black/40">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
                            <Rocket className="w-4 h-4" /> About Acadeno
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Premier IT Solutions & <br />
                            <span className="text-gradient-gold">Future-Ready Education</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Acadeno is a leading technology partner for businesses and a launchpad for future talent.
                            We specialize in delivering high-impact Information Technology solutions and embedded systems engineering for clients worldwide.
                            Simultaneously, we nurture the next generation of tech leaders through our industry-focused training and internship programs.
                        </p>

                        <div className="space-y-4">
                            <FeatureItem text="Advanced Software & Embedded Solutions" />
                            <FeatureItem text="Industry-Standard Corporate Training" />
                            <FeatureItem text="Hands-on Internship Opportunities" />
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-2xl blur-3xl" />
                        <div className="glass-card p-1 rounded-2xl border border-white/10 relative">
                            {/* Placeholder for a company image or abstract tech visual */}
                            <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center relative">
                                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/40 via-gray-900 to-black"></div>
                                <div className="text-center z-10">
                                    <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white">Excellence Delivered</h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="text-gray-300 font-medium">{text}</span>
        </div>
    );
}
