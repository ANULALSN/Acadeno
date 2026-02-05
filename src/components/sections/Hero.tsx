"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Layers, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-white/10"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-sm font-medium text-cyan-300 tracking-wide uppercase">
                            Innovating Future Tech
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <div className="h-[180px] md:h-[240px] flex flex-col justify-center items-center mb-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center"
                        >
                            <span className="block text-white mb-2">Where AI Builds</span>
                            <span className="block h-[1.2em] overflow-hidden">
                                <TextRotator words={["Your Career", "Tech Experts", "Innovators", "Future Leaders"]} />
                            </span>
                        </motion.h1>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        Acadeno operates as a dynamic hub specializing in Information Technology and Embedded Systems.
                        We deliver premium Software Development, Corporate Training, and elite Internship Programs.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link
                            href="#services"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                        >
                            Explore Solutions <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full glass-panel hover:bg-white/5 border border-white/10 transition-colors duration-300 flex items-center justify-center font-medium"
                        >
                            Partner With Us
                        </Link>
                    </motion.div>
                </div>

                {/* Feature Cards Grid - "Floating" Effect */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                    <FeatureCard
                        icon={<Globe className="w-8 h-8 text-cyan-400" />}
                        title="Global Reach"
                        desc="Connecting talent and technology across borders with cutting-edge solutions."
                        delay={1.0}
                    />
                    <FeatureCard
                        icon={<Layers className="w-8 h-8 text-violet-400" />}
                        title="Full-Stack Mastery"
                        desc="From embedded systems to enterprise web apps, we build the complete stack."
                        delay={1.2}
                    />
                    <FeatureCard
                        icon={<Zap className="w-8 h-8 text-amber-400" />}
                        title="Rapid Innovation"
                        desc="Agile methodologies that turn revolutionary ideas into reality, fast."
                        delay={1.4}
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
        >
            <div className="mb-4 p-3 rounded-full bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </motion.div>
    );
}

function TextRotator({ words }: { words: string[] }) {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500"
            >
                {words[index]}
            </motion.span>
        </AnimatePresence>
    );
}
