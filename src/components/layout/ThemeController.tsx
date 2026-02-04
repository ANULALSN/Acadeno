"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { createContext, useContext } from 'react';

// Simple context to pass motion values without prop drilling
interface ThemeContextType {
    accentColor: any; // MotionValue
}
const ThemeContext = createContext<ThemeContextType>({ accentColor: null });
export const useTheme = () => useContext(ThemeContext);

export default function ThemeController({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll();

    // Solar Cycle Color Map

    // Background Colors:
    // 0% (Hero) -> Sunrise: Dark Navy (#0B1120) / Deep Dawn
    // 35% (Courses) -> High Noon: Deep Blue/Cyan Tint (#082f49)
    // 65% (Placements) -> Golden Hour: Deep Violet/Purple (#2e1065)
    // 100% (Footer) -> Midnight: Onyx Black (#050505)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.35, 0.65, 1],
        ["#0B1120", "#082f49", "#2e1065", "#050505"]
    );

    // Accent Colors (for Neural Network & Companion 'A'):
    // 0% (Hero) -> Sunrise: Warm Orange (#F97316)
    // 35% (Courses) -> High Noon: Electric Cyan (#22d3ee)
    // 65% (Placements) -> Golden Hour: Golden Amber/Yellow (#fbbf24)
    // 100% (Footer) -> Midnight: Neon Cyan (#00F2FF)
    const accentColor = useTransform(
        scrollYProgress,
        [0, 0.35, 0.65, 1],
        ["#F97316", "#22d3ee", "#fbbf24", "#00F2FF"]
    );

    return (
        <motion.div style={{ backgroundColor }} className="relative min-h-screen transition-colors duration-1000">
            <ThemeContext.Provider value={{ accentColor }}>
                {children}
            </ThemeContext.Provider>
        </motion.div>
    );
}
