"use client";
import GlassCard from "@/components/ui/GlassCard";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function AnimatedSphere({ color }: { color: string }) {
    const ref = useRef<any>(null);
    useFrame((state) => {
        if (ref.current) {
            ref.current.distort = 0.3 + Math.sin(state.clock.getElapsedTime()) * 0.2;
        }
    });

    return (
        <Sphere args={[1, 32, 32]} scale={2} ref={ref}>
            <MeshDistortMaterial
                color={color}
                envMapIntensity={1}
                clearcoat={1}
                clearcoatRoughness={0}
                metalness={0.1}
                distort={0.4}
                speed={2}
            />
        </Sphere>
    );
}

const domains = [
    { title: "Python Full Stack", color: "#00F2FF", desc: "Master the backend" },
    { title: "Data Science & AI", color: "#7000FF", desc: "Unlock insights" },
    { title: "MERN Stack", color: "#00F2FF", desc: "Build modern apps" }
];

export default function DomainsSection() {
    return (
        <section className="min-h-[50vh] py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
                Available Domains
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {domains.map((d, i) => (
                    <GlassCard key={i} className="h-[400px] flex flex-col relative" hoverEffect>
                        <div className="absolute inset-0 -z-10 opacity-50">
                            <Canvas>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[10, 10, 5]} />
                                <AnimatedSphere color={d.color} />
                            </Canvas>
                        </div>
                        <div className="mt-auto p-8 z-10 glass-content">
                            <h3 className="text-2xl font-bold text-white mb-2">{d.title}</h3>
                            <p className="text-white/60">{d.desc}</p>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
