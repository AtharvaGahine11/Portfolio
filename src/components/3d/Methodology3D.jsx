import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

export const Methodology3D = ({ position = [3.4, -0.2, -2.5] }) => {
  const figureRef = useRef();
  const armRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (figureRef.current) {
      figureRef.current.rotation.y = Math.sin(t * 0.4) * 0.12;
    }
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(t * 1.2) * 0.08 + 0.4;
    }
  });

  return (
    <group ref={figureRef} position={position}>
      {/* Platform Pedestal */}
      <mesh position={[0, -1.8, 0]} receiveShadow>
        <cylinderGeometry args={[1.8, 2.0, 0.2, 32]} />
        <meshStandardMaterial color="#EAEAEA" roughness={0.3} />
      </mesh>

      {/* Thinking Boy / Developer 3D Model */}
      <group position={[0, -0.4, 0]}>
        {/* Head */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial color="#F5D0A9" roughness={0.4} />
        </mesh>

        {/* Stylish Hair */}
        <mesh position={[0, 1.45, -0.05]} castShadow>
          <boxGeometry args={[0.42, 0.25, 0.42]} />
          <meshStandardMaterial color="#111111" roughness={0.2} />
        </mesh>

        {/* Torso (Black Shirt) */}
        <mesh position={[0, 0.35, 0]} castShadow>
          <cylinderGeometry args={[0.32, 0.42, 1.1, 24]} />
          <meshStandardMaterial color="#111111" roughness={0.3} />
        </mesh>

        {/* Right Arm (Pensive Chin Touch) */}
        <group ref={armRef} position={[0.3, 0.6, 0.1]}>
          <mesh rotation={[0.6, -0.4, 0.8]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
            <meshStandardMaterial color="#111111" roughness={0.3} />
          </mesh>
          {/* Hand touching chin */}
          <mesh position={[0.2, 0.3, 0.1]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color="#F5D0A9" />
          </mesh>
        </group>
      </group>

      {/* Floating 3D Question Marks (?) & Thought Bubble Nodes */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <Text
          position={[0, 1.6, 0.3]}
          fontSize={0.9}
          color="#FF7A00"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.03}
          outlineColor="#111111"
        >
          ?
        </Text>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.6}>
        <Text
          position={[-0.8, 1.2, -0.2]}
          fontSize={0.6}
          color="#2496ED"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#FFFFFF"
        >
          ?
        </Text>
      </Float>

      <Float speed={2.2} rotationIntensity={1.8} floatIntensity={2.2}>
        <Text
          position={[0.8, 2.0, 0]}
          fontSize={0.7}
          color="#47A248"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#FFFFFF"
        >
          ?
        </Text>
      </Float>

      {/* Glowing Thought Bubble Orbs */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.8}>
        <mesh position={[0.4, 1.1, 0.4]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#FF7A00" emissive="#FF7A00" emissiveIntensity={0.6} />
        </mesh>
      </Float>

      {/* Ambient Halo Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]} position={[0, -1.2, 0]}>
        <ringGeometry args={[2.2, 2.24, 64]} />
        <meshBasicMaterial color="#FF7A00" side={THREE.DoubleSide} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};
