"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/20 backdrop-blur-md border-b border-white/5 py-4" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="relative flex items-center gap-2 group">
                    <div className="relative w-40 h-12 md:w-56 md:h-20 overflow-hidden flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Acadeno Logo"
                            width={220}
                            height={80}
                            className="object-contain w-full h-full object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <Link
                        href="#contact"
                        className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 text-sm font-medium"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full" />
        </Link>
    );
}

export default Navbar;
