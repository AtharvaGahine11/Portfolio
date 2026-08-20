import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { AtharvaAvatar3D } from './AtharvaAvatar3D';

export const IntroStudio = ({ ringPosition = [0, 0, -4.5], ringScale = 0.9 }) => {
  const ringsGroupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const serverLedsRef = useRef();
  const particlesRef = useRef();

  // Floating particles geometry
  const particleCount = 180;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = Math.random() * 10 - 2;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (ring1Ref.current) ring1Ref.current.rotation.x = t * 0.15;
    if (ring2Ref.current) ring2Ref.current.rotation.y = t * 0.2;

    if (ringsGroupRef.current) {
      ringsGroupRef.current.rotation.y = t * 0.04;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Studio Architectural Floor with Realistic Shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color="#F4F4F0" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Architectural Studio Grid Overlay */}
      <gridHelper args={[80, 60, '#FF7A00', '#E2E2DC']} position={[0, -2.48, 0]} />

      {/* 2. Background Thin Architectural Light Rings (Deep Z-Space) */}
      <group ref={ringsGroupRef} position={ringPosition} scale={ringScale}>
        <mesh ref={ring1Ref}>
          <torusGeometry args={[4.8, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#FF7A00"
            emissive="#FF7A00"
            emissiveIntensity={0.5}
            transparent
            opacity={0.4}
          />
        </mesh>
        <mesh ref={ring2Ref}>
          <torusGeometry args={[3.8, 0.012, 16, 100]} />
          <meshBasicMaterial color="#111111" transparent opacity={0.3} />
        </mesh>
      </group>



      {/* 4. Large 3D Curved Ultrawide Workstation Monitor */}
      <group position={[2.4, 0.4, -2.4]}>
        {/* Monitor Screen Frame */}
        <mesh castShadow position={[0, 0, 0]}>
          <boxGeometry args={[3.8, 1.9, 0.08]} />
          <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Monitor Display Surface (System Architecture Code Display) */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[3.68, 1.78]} />
          <meshStandardMaterial
            color="#0D1117"
            emissive="#161B22"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>
        {/* Monitor Stand Base */}
        <mesh position={[0, -1.1, 0.1]}>
          <cylinderGeometry args={[0.1, 0.15, 0.6, 16]} />
          <meshStandardMaterial color="#111111" metalness={0.8} />
        </mesh>
      </group>

      {/* 5. Server & Network Rack Tower (Far Right) */}
      <group position={[5.4, -0.2, -2.2]}>
        {/* Server Cabinet Body */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 4.2, 1.4]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Stacked Blade Unit Lines with Status LEDs */}
        {[-1.6, -1.0, -0.4, 0.2, 0.8, 1.4].map((y, idx) => (
          <group key={idx} position={[0, y, 0.71]}>
            {/* Blade Unit Plate */}
            <mesh>
              <planeGeometry args={[1.1, 0.4]} />
              <meshStandardMaterial color="#262626" roughness={0.2} />
            </mesh>
            {/* Blinking Green LED */}
            <mesh position={[-0.4, 0, 0.01]}>
              <sphereGeometry args={[0.04, 12, 12]} />
              <meshBasicMaterial color="#00FF66" />
            </mesh>
            {/* Blinking Orange LED */}
            <mesh position={[-0.25, 0, 0.01]}>
              <sphereGeometry args={[0.04, 12, 12]} />
              <meshBasicMaterial color="#FF7A00" />
            </mesh>
          </group>
        ))}
      </group>

      {/* 6. Floating Cloud & Telemetry Network Nodes */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.4}>
        <group position={[-3.8, 1.8, -2]}>
          <mesh castShadow>
            <sphereGeometry args={[0.3, 24, 24]} />
            <meshStandardMaterial color="#2496ED" emissive="#2496ED" emissiveIntensity={0.6} />
          </mesh>
        </group>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.8}>
        <group position={[-4.5, -0.6, -1.8]}>
          <mesh castShadow>
            <octahedronGeometry args={[0.4, 0]} />
            <meshStandardMaterial color="#FF7A00" wireframe />
          </mesh>
        </group>
      </Float>

      {/* 7. Atharva 3D Hero Avatar (Slightly Right of Center) */}
      <AtharvaAvatar3D position={[2.4, -0.1, -1.0]} scale={1.15} isIntro={true} />

      {/* 8. Studio Directional & Ambient Lighting with Shadows */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <ambientLight intensity={0.7} />
      <pointLight position={[2.4, 1.5, -1.0]} intensity={1.5} color="#FF7A00" />

      {/* Swirling Volumetric Particle Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#FF7A00" transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  );
};
