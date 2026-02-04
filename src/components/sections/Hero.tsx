"use client";
import { useEffect, useState } from "react";
import { useIntroStore } from "@/store/introStore";
import IntroductionCanvas from "@/components/ui/ParticleLogo";
import { motion } from "framer-motion";

export default function Hero() {
    const { phase, setPhase } = useIntroStore();
    const [typedText, setTypedText] = useState("");
    const fullText = "> Initializing future_ready_engine... [SUCCESS]";

    useEffect(() => {
        if (phase === 'formed') {
            let i = 0;
            setTypedText("");
            const interval = setInterval(() => {
                setTypedText(fullText.slice(0, i + 1));
                i++;
                if (i > fullText.length) {
                    clearInterval(interval);
                    setTimeout(() => setPhase('dispersing'), 1500);
                }
            }, 50);
            return () => clearInterval(interval);
        } else if (phase === 'dispersing') {
            // Transition to idle happens automatically via opacity in other components, 
            // but we set state to idle to confirm logic flow
            const timer = setTimeout(() => setPhase('idle'), 1000);
            return () => clearTimeout(timer);
        }
    }, [phase, setPhase]);

    return (
        <section className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
            {/* Particle Logo Context */}
            <IntroductionCanvas />

            {/* Text UI */}
            <div className={`mt-80 z-10 transition-opacity duration-500 ${phase === 'formed' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="font-mono text-cyan text-lg md:text-xl relative text-center">
                    {typedText}
                    <span className="animate-pulse">_</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: typedText.length >= fullText.length ? 1 : 0, y: typedText.length >= fullText.length ? 0 : 10 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-center"
                >
                    <p className="text-white/60 text-sm tracking-[0.2em] font-light uppercase">
                        CYBERPARK: Where Innovation Connects
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
