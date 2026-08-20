import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const IntroStudio = ({ ringPosition = [3.2, 0.4, -3.5], ringScale = 0.75 }) => {
  const ringsGroupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const particlesRef = useRef();

  // Floating particles geometry
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 18;
    positions[i + 1] = Math.random() * 10 - 3;
    positions[i + 2] = (Math.random() - 0.5) * 18;
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (ring1Ref.current) ring1Ref.current.rotation.x = t * 0.3;
    if (ring2Ref.current) ring2Ref.current.rotation.y = t * 0.4;
    if (ring3Ref.current) ring3Ref.current.rotation.z = t * 0.25;

    if (ringsGroupRef.current) {
      ringsGroupRef.current.rotation.y = t * 0.08;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Studio Architectural Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
        <planeGeometry args={[70, 70]} />
        <meshStandardMaterial color="#F0F0EC" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Grid helper overlay */}
      <gridHelper args={[70, 50, '#FF7A00', '#D9D9D4']} position={[0, -2.48, 0]} />

      {/* Futuristic Gyroscopic Tech Rings Matrix Backdrop */}
      <group ref={ringsGroupRef} position={ringPosition} scale={ringScale}>
        {/* Outer Ring */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[4.2, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#FF7A00"
            roughness={0.1}
            metalness={0.8}
            emissive="#FF7A00"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Middle Ring */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[3.4, 0.03, 16, 100]} />
          <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.9} />
        </mesh>

        {/* Inner Ring */}
        <mesh ref={ring3Ref}>
          <torusGeometry args={[2.6, 0.02, 16, 100]} />
          <meshBasicMaterial color="#FF7A00" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* Floating 3D Geometric Polyhedron Orbs */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-4.5, 2, -2]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#FF7A00" roughness={0.1} metalness={0.6} wireframe />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[4.5, 2.5, -2.5]}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.8} wireframe />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={1.2} floatIntensity={2.2}>
        <mesh position={[-3.8, -1, -1.5]}>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#FF7A00" roughness={0.2} emissive="#FF7A00" emissiveIntensity={0.4} />
        </mesh>
      </Float>

      <Float speed={2.1} rotationIntensity={1.8} floatIntensity={1.6}>
        <mesh position={[3.8, -1.2, -1.8]}>
          <tetrahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#2496ED" roughness={0.1} metalness={0.5} wireframe />
        </mesh>
      </Float>

      {/* Swirling Volumetric Particle Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#FF7A00" transparent opacity={0.7} sizeAttenuation />
      </points>
    </group>
  );
};
