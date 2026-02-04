import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={twMerge(
                clsx(
                    "relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[32px] overflow-hidden shadow-2xl shadow-black/50",
                    "transition-all duration-500 ease-out will-change-transform",
                    hoverEffect && "hover:bg-white/10 hover:border-white/20 hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]",
                    className
                )
            )}
            {...props}
        >
            {/* Subtle sheen gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-50" />

            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
}
