"use client";
import FooterSection from "@/components/sections/FooterSection";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";

export default function MainContent() {
    return (
        <div className="relative z-10 w-full">
            <Services />
            <About />
            <FooterSection />
        </div>
    );
}
