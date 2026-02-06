"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Rocket, GraduationCap, Code2, Users, ArrowRight } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-black/40">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
                        <Rocket className="w-4 h-4" /> About Acadeno
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Empowering Ideas. <span className="text-gradient-gold">Engineering Solutions.</span> <br />
                        Elevating Careers.
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Acadeno (formerly Maitexa) is a value-driven IT Training and Software Solutions organization, guiding clients from the earliest stages of ideation and concept development through design, development, and deployment. Our expertise enables us to build innovative, functional, and scalable IT solutions that serve as the cornerstone of business growth and digital transformation.
                    </p>
                    <div className="mt-6 text-gray-500 text-sm text-balance">
                        Founded in 2018 with a humble beginning and a passion for empowering B.Tech, MCA, and IT students, our team quickly made an impact in the market. This rapid success is a testament to our proven capabilities, strong leadership, and commitment to quality. Led by two seasoned technocrats with a vision to stay ahead of industry trends, Acadeno continues to evolve while retaining its core values.
                    </div>
                </motion.div>

                {/* Verticals Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {/* Training Division */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mb-6 text-violet-400">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Training Division</h3>
                            <h4 className="text-violet-300 font-medium mb-4">Training Talent & Transforming Technology</h4>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Our training wing has established partnerships with leading colleges, becoming a trusted destination for students seeking guidance for their final year projects. With a strong record of delivering hands-on technical training, we have helped numerous young talents secure placements in reputed organizations across India and abroad.
                            </p>
                            <ul className="space-y-3">
                                <FeatureItem text="Structured, result-oriented learning" />
                                <FeatureItem text="Guidance for final year projects" />
                                <FeatureItem text="Placement assistance" />
                            </ul>
                        </div>
                    </motion.div>

                    {/* Software Development Division */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Software Development Division</h3>
                            <h4 className="text-cyan-300 font-medium mb-4">Where Innovation Meets Execution</h4>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Acadeno’s software development practice continues to expand, fueled by our commitment to high-end technical expertise and custom-built solutions that meet a wide spectrum of business needs. We blend diverse capabilities with deep industry experience to safeguard our clients’ ambitions.
                            </p>
                            <ul className="space-y-3">
                                <FeatureItem text="Custom-built software solutions" />
                                <FeatureItem text="Seamless service delivery" />
                                <FeatureItem text="Secure & scalable architecture" />
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Identity Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-cyan-900/40 blur-3xl" />
                    <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center md:text-left grid md:grid-cols-[2fr,1fr] gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Growth, Our Identity</h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Our passion for development, combined with years of industry experience, paved the way for our rebranding from Maitexa to Acadeno—reflecting our vision to serve a wider global clientele. Today, we are equipped to deliver tailor-made software solutions and end-to-end IT consulting of any scale.
                                </p>
                                <p className="font-medium text-white text-lg">
                                    At Acadeno, we don’t just deliver projects—we build partnerships, enable growth, and engineer success.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-40 h-40 md:w-48 md:h-48">
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                                <div className="relative h-full w-full rounded-full border border-white/10 bg-black/50 flex items-center justify-center flex-col gap-2 backdrop-blur-md">
                                    <Users className="w-10 h-10 text-yellow-400" />
                                    <span className="text-2xl font-bold text-white">15+</span>
                                    <span className="text-xs text-gray-400 uppercase tracking-widest">Professionals</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" />
            <span className="text-gray-300 text-sm">{text}</span>
        </div>
    );
}
