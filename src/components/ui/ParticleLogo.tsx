"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useIntroStore } from '@/store/introStore';

function ImageParticles({ imageUrl = "/logo.png" }) {
    const { setPhase } = useIntroStore();
    const pointsRef = useRef<THREE.Points>(null);
    const scrollRef = useRef(0);
    const [particlesData, setParticlesData] = useState<{
        initialPositions: Float32Array;
        targetPositions: Float32Array;
        colors: Float32Array;
    } | null>(null);

    // Track scroll for fade effect
    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const scale = 0.8;
            const width = img.width * scale;
            const height = img.height * scale;
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) return;

            ctx.drawImage(img, 0, 0, width, height);
            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;

            const initPos = [];
            const targetPos = [];
            const colors = [];

            const cx = width / 2;
            const cy = height / 2;
            const gap = 2;

            for (let y = 0; y < height; y += gap) {
                for (let x = 0; x < width; x += gap) {
                    const i = (y * width + x) * 4;
                    const alpha = data[i + 3];

                    if (alpha > 40) {
                        const r = data[i] / 255;
                        const g = data[i + 1] / 255;
                        const b = data[i + 2] / 255;
                        colors.push(r, g, b);

                        // Target Position (Scale 0.0055)
                        const pX = (x - cx) * 0.0055;
                        const pY = -(y - cy) * 0.0055;
                        targetPos.push(pX, pY, 0);

                        // Initial Position: Mist Convergence
                        // Start randomly within a small cloud around the target
                        // No dramatic flying from corners. 
                        // Use a Gaussian-like spread.
                        const spread = 5.0; // Small spread
                        const iX = pX + (Math.random() - 0.5) * spread;
                        const iY = pY + (Math.random() - 0.5) * spread;
                        const iZ = (Math.random() - 0.5) * spread;

                        initPos.push(iX, iY, iZ);
                    }
                }
            }

            setParticlesData({
                initialPositions: new Float32Array(initPos),
                targetPositions: new Float32Array(targetPos),
                colors: new Float32Array(colors)
            });
        };
    }, [imageUrl]);

    useFrame((state) => {
        if (!pointsRef.current || !particlesData) return;

        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
        const time = state.clock.getElapsedTime();
        // Slow, calm duration
        const duration = 4.0;

        // Intro Progress
        let progress = Math.min(time / duration, 1);
        // Exponential ease out for "settling" feel
        progress = 1 - Math.pow(2, -10 * progress);

        for (let i = 0; i < positions.length; i += 3) {
            const ix = particlesData.initialPositions[i];
            const iy = particlesData.initialPositions[i + 1];
            const iz = particlesData.initialPositions[i + 2];

            const tx = particlesData.targetPositions[i];
            const ty = particlesData.targetPositions[i + 1];
            const tz = particlesData.targetPositions[i + 2];

            const currentX = ix + (tx - ix) * progress;
            const currentY = iy + (ty - iy) * progress;
            const currentZ = iz + (tz - iz) * progress;

            positions[i] = currentX;
            positions[i + 1] = currentY;
            positions[i + 2] = currentZ;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Scroll Fade Effect (Material Opacity)
        // Fade out over first 300px
        const scrollY = scrollRef.current;
        const fadeStart = 0;
        const fadeEnd = 300;
        let opacity = 1;

        if (scrollY > fadeStart) {
            opacity = 1 - Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
        }

        // Apply opacity to material
        const material = pointsRef.current.material as THREE.PointsMaterial;
        material.opacity = opacity;

        // Optional: Subtle vertical drift on scroll
        pointsRef.current.position.y = scrollY * 0.002;
    });

    // Timeout Logic
    useEffect(() => {
        if (particlesData) {
            const timer = setTimeout(() => {
                setPhase('formed');
            }, 4500);
            return () => clearTimeout(timer);
        }
    }, [setPhase, particlesData]);

    if (!particlesData) return null;

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesData.initialPositions.length / 3}
                    array={new Float32Array(particlesData.initialPositions)}
                    itemSize={3}
                    args={[particlesData.initialPositions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particlesData.colors.length / 3}
                    array={particlesData.colors}
                    itemSize={3}
                    args={[particlesData.colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.035}
                vertexColors
                transparent
                opacity={1}
                blending={THREE.NormalBlending}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}

export default function IntroductionCanvas() {
    const { phase } = useIntroStore();

    // Keep visible for the fade effect
    // We rely on material opacity in useFrame for the scroll fade, 
    // but the 'dispersing' phase logic from Hero.tsx/store might still apply.
    // If phase becomes 'dispersing', the parent div fades out via CSS.

    return (
        <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${phase === 'dispersing' ? 'opacity-0' : 'opacity-100'}`}>
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]}>
                <ImageParticles />
            </Canvas>
        </div>
    );
}
