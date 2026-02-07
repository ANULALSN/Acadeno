"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Mail,
    Phone,
    MapPin,
    Briefcase,
    Calendar,
    Building2,
    Linkedin,
    Github,
    Globe
} from "lucide-react";

// Sample Employee Data - Replace with actual data or fetch from API
const employeeData = {
    name: "John Doe",
    designation: "Senior Software Engineer",
    department: "Technology & Innovation",
    employeeId: "ACD-2024-001",
    email: "john.doe@acadeno.com",
    phone: "+91 98765 43210",
    location: "Kochi, Kerala, India",
    joinDate: "January 15, 2024",
    photo: "/Acadeno Logo Final-02.png", // Using logo as placeholder
    skills: ["React", "Node.js", "Python", "AI/ML", "Cloud Computing"],
    bio: "Passionate about building innovative solutions that drive digital transformation. Specialized in full-stack development with expertise in AI integration and cloud architecture.",
    social: {
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        portfolio: "https://johndoe.dev"
    }
};

export default function EmployeePage() {
    return (
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
            {/* Background Gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-deep-blue via-onyx to-violet/20 -z-10" />

            <div className="max-w-4xl mx-auto">
                {/* Employee Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card rounded-3xl overflow-hidden"
                >
                    {/* Header Banner */}
                    <div className="h-32 bg-gradient-to-r from-cyan/30 via-violet/30 to-cyan/30 relative">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,242,255,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-[shimmer_3s_linear_infinite]" />
                    </div>

                    {/* Profile Section */}
                    <div className="px-6 sm:px-10 pb-8 -mt-16 relative">
                        {/* Profile Photo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="w-32 h-32 rounded-2xl border-4 border-onyx bg-gradient-to-br from-cyan/20 to-violet/20 overflow-hidden shadow-xl shadow-cyan/20"
                        >
                            <div className="w-full h-full flex items-center justify-center bg-onyx/50">
                                <Image
                                    src={employeeData.photo}
                                    alt={employeeData.name}
                                    width={128}
                                    height={128}
                                    className="object-contain p-2"
                                />
                            </div>
                        </motion.div>

                        {/* Employee Info */}
                        <div className="mt-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h1 className="text-3xl sm:text-4xl font-bold text-gradient-cyan">
                                    {employeeData.name}
                                </h1>
                                <p className="text-xl text-metallic/80 mt-1">
                                    {employeeData.designation}
                                </p>
                                <div className="flex items-center gap-2 mt-2 text-cyan/80">
                                    <Building2 size={16} />
                                    <span className="text-sm">{employeeData.department}</span>
                                </div>
                            </motion.div>

                            {/* Employee ID Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan/20 to-violet/20 border border-cyan/30"
                            >
                                <span className="text-xs text-metallic/60">Employee ID</span>
                                <span className="text-sm font-semibold text-cyan">{employeeData.employeeId}</span>
                            </motion.div>
                        </div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 grid sm:grid-cols-2 gap-4"
                        >
                            <ContactItem
                                icon={<Mail size={18} />}
                                label="Email"
                                value={employeeData.email}
                                href={`mailto:${employeeData.email}`}
                            />
                            <ContactItem
                                icon={<Phone size={18} />}
                                label="Phone"
                                value={employeeData.phone}
                                href={`tel:${employeeData.phone.replace(/\s/g, '')}`}
                            />
                            <ContactItem
                                icon={<MapPin size={18} />}
                                label="Location"
                                value={employeeData.location}
                            />
                            <ContactItem
                                icon={<Calendar size={18} />}
                                label="Join Date"
                                value={employeeData.joinDate}
                            />
                        </motion.div>

                        {/* Bio Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8"
                        >
                            <h2 className="text-lg font-semibold text-metallic mb-3 flex items-center gap-2">
                                <Briefcase size={18} className="text-cyan" />
                                About
                            </h2>
                            <p className="text-metallic/70 leading-relaxed">
                                {employeeData.bio}
                            </p>
                        </motion.div>

                        {/* Skills Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="mt-8"
                        >
                            <h2 className="text-lg font-semibold text-metallic mb-3">Skills & Expertise</h2>
                            <div className="flex flex-wrap gap-2">
                                {employeeData.skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        className="px-4 py-1.5 rounded-full text-sm bg-gradient-to-r from-cyan/10 to-violet/10 border border-cyan/20 text-metallic/80 hover:border-cyan/50 hover:text-cyan transition-all duration-300"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 pt-6 border-t border-white/10"
                        >
                            <h2 className="text-lg font-semibold text-metallic mb-3">Connect</h2>
                            <div className="flex gap-4">
                                <SocialLink
                                    href={employeeData.social.linkedin}
                                    icon={<Linkedin size={20} />}
                                    label="LinkedIn"
                                />
                                <SocialLink
                                    href={employeeData.social.github}
                                    icon={<Github size={20} />}
                                    label="GitHub"
                                />
                                <SocialLink
                                    href={employeeData.social.portfolio}
                                    icon={<Globe size={20} />}
                                    label="Portfolio"
                                />
                            </div>
                        </motion.div>

                        {/* Company Branding */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-10 pt-6 border-t border-white/10 flex items-center justify-center gap-3"
                        >
                            <Image
                                src="/Acadeno Logo Final-02.png"
                                alt="Acadeno Logo"
                                width={40}
                                height={40}
                                className="opacity-60"
                            />
                            <span className="text-metallic/40 text-sm">
                                Acadeno Technologies Pvt. Ltd.
                            </span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Verification Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="mt-6 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-green-400">Verified Acadeno Employee</span>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

// Contact Item Component
function ContactItem({
    icon,
    label,
    value,
    href
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}) {
    const content = (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan/30 transition-all duration-300 group">
            <div className="text-cyan group-hover:text-cyan/80 transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-xs text-metallic/50">{label}</p>
                <p className="text-sm text-metallic/80 group-hover:text-cyan transition-colors">
                    {value}
                </p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block">
                {content}
            </a>
        );
    }

    return content;
}

// Social Link Component
function SocialLink({
    href,
    icon,
    label
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-300 group"
        >
            <span className="text-metallic/60 group-hover:text-cyan transition-colors">
                {icon}
            </span>
            <span className="text-sm text-metallic/60 group-hover:text-cyan transition-colors">
                {label}
            </span>
        </a>
    );
}
