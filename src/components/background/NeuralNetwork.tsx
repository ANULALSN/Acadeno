"use client";
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useIntroStore } from "@/store/introStore";
import { useTheme } from "@/components/layout/ThemeController";
import { useMotionValueEvent } from "framer-motion";
import Comet from "./Comet";

function Network({ count = 150 }) {
    const mesh = useRef<THREE.Points>(null);
    const { accentColor } = useTheme();
    const materialRef = useRef<THREE.PointsMaterial>(null);

    // Mouse tracking in Normalized Device Coordinates (-1 to +1)
    const mouse = useRef(new THREE.Vector2(1000, 1000));

    // Viewport for projection
    const { viewport } = useThree();

    useMotionValueEvent(accentColor, "change", (latest) => {
        if (materialRef.current) {
            materialRef.current.color.set(latest as string);
        }
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Map mouse to NDC
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const particles = useMemo(() => {
        const temp = [];
        const original = [];
        const vx = [];
        const vy = [];
        const vz = [];

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 10;
            temp.push(x, y, z);
            original.push(x, y, z);
            vx.push(0); vy.push(0); vz.push(0);
        }
        return {
            positions: new Float32Array(temp),
            originals: new Float32Array(original),
            velocities: { x: new Float32Array(vx), y: new Float32Array(vy), z: new Float32Array(vz) }
        };
    }, [count]);

    useFrame((state, delta) => {
        if (mesh.current) {
            const positions = mesh.current.geometry.attributes.position.array as Float32Array;
            const { originals, velocities } = particles;

            // Mouse World Position (Projected to Z=0)
            const mouseX = mouse.current.x * (viewport.width / 2);
            const mouseY = mouse.current.y * (viewport.height / 2);

            for (let i = 0; i < count; i++) {
                const i3 = i * 3;

                // 1. Current Physics State
                let px = positions[i3];
                let py = positions[i3 + 1];
                let pz = positions[i3 + 2];

                let vx = velocities.x[i];
                let vy = velocities.y[i];
                let vz = velocities.z[i];

                // 2. Mouse Repulsion Force
                const dx = px - mouseX;
                const dy = py - mouseY;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);
                const radius = 4.0;

                if (dist < radius) {
                    const force = (radius - dist) / radius; // 0 to 1
                    const angle = Math.atan2(dy, dx);
                    const strength = 0.5; // Push Strength

                    vx += Math.cos(angle) * force * strength * 0.5;
                    vy += Math.sin(angle) * force * strength * 0.5;
                    vz += force * strength * 0.5; // Push Z for 3D feel
                }

                // 3. Spring Force (Return to Original)
                const ox = originals[i3];
                const oy = originals[i3 + 1];
                const oz = originals[i3 + 2];

                const springStrength = 0.05;
                vx += (ox - px) * springStrength;
                vy += (oy - py) * springStrength;
                vz += (oz - pz) * springStrength;

                // 4. Damping (Friction)
                const damping = 0.9;
                vx *= damping;
                vy *= damping;
                vz *= damping;

                // 5. Apply Velocity
                px += vx;
                py += vy;
                pz += vz;

                // Update Arrays
                positions[i3] = px;
                positions[i3 + 1] = py;
                positions[i3 + 2] = pz;

                velocities.x[i] = vx;
                velocities.y[i] = vy;
                velocities.z[i] = vz;
            }

            mesh.current.geometry.attributes.position.needsUpdate = true;

            // Slow Global Rotation (Drift) - Optional, applied to whole mesh
            // We apply it very slowly so it doesn't break interaction too much,
            // or we skip it for pure interactive feel.
            // User wanted "Water Ripple". Rotating water is weird. Let's keep it static but drifting.
            // Actually, static is best for accurate mouse interaction.
            // We will add a tiny Z-axis wobble per particle if needed, but velocity handles "alive" feel.
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                    args={[particles.positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                ref={materialRef}
                size={0.07}
                color="#00F2FF"
                transparent
                opacity={0.6}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function NeuralNetwork() {
    const { phase } = useIntroStore();
    const isVisible = true;

    return (
        <div
            className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-2000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]}
            >
                <Network />
                <Comet />
            </Canvas>
        </div>
    );
}
