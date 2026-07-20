import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const LidarPulse = () => {
    const lidarRef = useRef();
    useFrame((state) => {
        if (!lidarRef.current) return;
        const t = state.clock.getElapsedTime();
        const cycleDuration = 4.0; // Add a cycle duration
        const progress = (t % cycleDuration) / cycleDuration;
        const maxScale = 2;                     // how far the ring travels
        const s = progress * maxScale;
        lidarRef.current.scale.set(s, s, s);
        lidarRef.current.material.opacity = 1 - progress;
    });

    return (
        <mesh position={[0, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]} ref={lidarRef}>
            <ringGeometry args={[0.9, 1, 48]} />
            <meshBasicMaterial transparent={true} opacity={1} color="Red" side={THREE.DoubleSide}/>
        </mesh>
    )
}

const Robot = () => {
    const groupRef = useRef();
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x=0.5;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.5, 1, 2]} />
                <meshStandardMaterial color="Orange" />
            </mesh>
            <mesh position={[0, 0, 1]}>
                <boxGeometry args={[0.5, 0.25, 0.1]} />
                <meshStandardMaterial color="Grey" />
            </mesh>
            <mesh position={[0, -0.65, 0.8]}>
                <sphereGeometry args={[0.15, 32, 32]} />
                <meshStandardMaterial color="Grey" />
            </mesh>
            <mesh position={[0, 0.55, 0]}>
                <cylinderGeometry args={[0.2, 0.275, 0.1, 32]} />
                <meshStandardMaterial color="Grey" />
            </mesh>
            <mesh position={[0.825, -0.5, -0.5]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.4, 0.4, 0.15, 32]} />
                <meshStandardMaterial color="Grey" />
            </mesh>
            <mesh position={[-0.825, -0.5, -0.5]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.4, 0.4, 0.15, 32]} />
                <meshStandardMaterial color="Grey" />
            </mesh>
            <LidarPulse />
        </group> 
    );
};

export const RobotScene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true}} style={{ background: "transparent" }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5,5,5]} />
            <Robot />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    );
};