"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeController";

// Trailing dot component
const TrailingDot = ({ mouseX, mouseY, delay, color }: { mouseX: any, mouseY: any, delay: number, color: string }) => {
    // Smoother spring for trails
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 + delay * 0.2 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full mix-blend-screen"
            style={{
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
                width: 6,
                height: 6,
                backgroundColor: color,
                opacity: 0.6
            }}
        />
    );
};

export default function CustomCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [themeColor, setThemeColor] = useState("#00F2FF");

    const { accentColor } = useTheme();

    useMotionValueEvent(accentColor, "change", (latest) => {
        setThemeColor(latest as string);
    });

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a");

            setIsHovering(!!isClickable);
        };

        const checkScroll = () => {
            setIsScrolled(window.scrollY > 500);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousemove", checkHover);
        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousemove", checkHover);
            window.removeEventListener("scroll", checkScroll);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Stellar Trail - Only visible when formed/scrolled */}
            {isScrolled && (
                <>
                    <TrailingDot mouseX={mouseX} mouseY={mouseY} delay={0.2} color={themeColor} />
                    <TrailingDot mouseX={mouseX} mouseY={mouseY} delay={0.4} color={themeColor} />
                    <TrailingDot mouseX={mouseX} mouseY={mouseY} delay={0.6} color={themeColor} />
                    <TrailingDot mouseX={mouseX} mouseY={mouseY} delay={0.8} color={themeColor} />
                </>
            )}

            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen"
                style={{
                    x,
                    y,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 2.5 : 1,
                        width: isScrolled ? 40 : 20,
                        height: isScrolled ? 40 : 20,
                        rotate: isScrolled ? 0 : 0
                    }}
                    className="relative flex items-center justify-center"
                >
                    <motion.div
                        animate={{ opacity: isScrolled ? 0 : 1 }}
                        className="absolute inset-0 rounded-full blur-md"
                        style={{ backgroundColor: themeColor }}
                    />

                    <motion.div
                        animate={{
                            opacity: isScrolled ? 1 : 0,
                            scale: isScrolled ? 1 : 0.5,
                            y: isScrolled ? [0, -3, 0] : 0
                        }}
                        transition={{
                            y: {
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        }}
                        className="absolute inset-0 flex items-center justify-center font-extrabold font-mono text-xl"
                        style={{
                            color: themeColor,
                            textShadow: `0 0 10px ${themeColor}`
                        }}
                    >
                        A
                    </motion.div>

                    <div className="absolute w-1 h-1 bg-white rounded-full z-10" />
                </motion.div>
            </motion.div>
        </>
    );
}
