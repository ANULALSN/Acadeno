"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, GraduationCap, Users } from "lucide-react";

const services = [
    {
        icon: <Code2 className="w-10 h-10" />,
        title: "Software Development",
        desc: "Bespoke software solutions tailored to your business needs, utilizing the latest web and mobile technologies for scalable performance.",
        color: "from-cyan-500 to-blue-600"
    },
    {
        icon: <Cpu className="w-10 h-10" />,
        title: "Embedded Systems",
        desc: "Pioneering hardware-software integration. We engineer robust embedded systems for IoT, automation, and industrial applications.",
        color: "from-violet-500 to-purple-600"
    },
    {
        icon: <GraduationCap className="w-10 h-10" />,
        title: "Corporate Training",
        desc: "Empowering teams with cutting-edge technical skills. Our expert-led sessions cover full-stack dev, cloud computing, and AI.",
        color: "from-amber-400 to-orange-500"
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "Internship Programs",
        desc: "Launching careers with hands-on experience. We provide immersive internships that bridge the gap between academia and industry.",
        color: "from-emerald-400 to-green-600"
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-violet-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Our <span className="text-gradient-cyan">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Empowering businesses with innovation and students with skills.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{ background: `linear-gradient(to bottom right, var(--color-cyan), var(--color-violet))` }}
            />

            <div className="glass-card p-8 rounded-2xl h-full border border-white/5 hover:border-white/20 transition-colors duration-300 relative overflow-hidden">
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.service} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300 text-white`}>
                    {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.desc}
                </p>
            </div>
        </motion.div>
    );
}
