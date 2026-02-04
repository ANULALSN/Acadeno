"use client";
import AboutSection from "@/components/sections/AboutSection";
import InternshipSection from "@/components/sections/InternshipSection";
import DomainsSection from "@/components/sections/DomainsSection";
import FooterSection from "@/components/sections/FooterSection";

export default function MainContent() {
    return (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 space-y-32">
            <AboutSection />
            <InternshipSection />
            <DomainsSection />
            <FooterSection />
        </div>
    );
}
