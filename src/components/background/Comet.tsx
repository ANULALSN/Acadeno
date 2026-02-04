"use strict";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Comet = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const trailRef = useRef<THREE.Mesh>(null);

    // Curve for the comet to follow
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 5, 0),
            new THREE.Vector3(-5, 2, -5),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(5, -2, 5),
            new THREE.Vector3(10, -5, 0),
        ]);
    }, []);

    useFrame(({ clock }) => {
        const t = (clock.getElapsedTime() * 0.1) % 1; // Speed factor
        const position = curve.getPoint(t);

        if (meshRef.current) {
            meshRef.current.position.copy(position);
        }
    });

    return (
        <>
            <mesh ref={meshRef}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshBasicMaterial color="#00F2FF" />
            </mesh>
            {/* Trail implementation would go here - simplified for now */}
        </>
    );
};

export default Comet;
