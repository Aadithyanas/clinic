"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geom = useMemo(() => {
    return new THREE.PlaneGeometry(10, 10, 64, 64);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const positions = (meshRef.current.geometry as THREE.PlaneGeometry).attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = Math.sin(x * 1.5 + time * 0.5) * 0.3 + Math.cos(y * 1.5 + time * 0.3) * 0.3;
      positions.setZ(i, z);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geom} rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, -2]}>
      <meshStandardMaterial 
        color="#eaddd7" 
        roughness={0.4} 
        metalness={0.1} 
        wireframe={false} 
      />
    </mesh>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#e0cec7" />
        <WaveMesh />
      </Canvas>
    </div>
  );
}
