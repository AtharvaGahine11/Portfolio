import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const Education3D = ({ position = [3.4, -0.2, -2] }) => {
  const groupRef = useRef();
  const hatRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
    }
    if (hatRef.current) {
      hatRef.current.position.y = 1.8 + Math.sin(t * 1.8) * 0.1;
      hatRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Base Platform / Grass Courtyard */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <cylinderGeometry args={[2.4, 2.6, 0.2, 32]} />
        <meshStandardMaterial color="#EAEAEA" roughness={0.3} />
      </mesh>

      {/* Main University Building Structure */}
      <group position={[0, 0.6, 0]}>
        {/* Main Facade */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.0, 1.2, 1.2]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Roof Triangular Gable */}
        <mesh position={[0, 0.85, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[1.5, 0.6, 4]} />
          <meshStandardMaterial color="#FF7A00" roughness={0.3} />
        </mesh>

        {/* Entrance Pillars */}
        {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
          <mesh key={i} position={[x, -0.1, 0.62]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.9, 16]} />
            <meshStandardMaterial color="#F7F7F4" roughness={0.1} />
          </mesh>
        ))}

        {/* Clock Tower Dome */}
        <mesh position={[0, 1.3, 0]} castShadow>
          <boxGeometry args={[0.5, 0.6, 0.5]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
        </mesh>
        <mesh position={[0, 1.7, 0]} castShadow>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial color="#FF7A00" emissive="#FF7A00" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Floating 3D Graduation Mortarboard Cap */}
      <group ref={hatRef} position={[0, 1.8, 0]}>
        {/* Cap Top Diamond */}
        <mesh rotation={[0.2, 0, 0]} castShadow>
          <boxGeometry args={[0.8, 0.03, 0.8]} />
          <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Skull Cap Base */}
        <mesh position={[0, -0.1, 0]} castShadow>
          <cylinderGeometry args={[0.26, 0.26, 0.18, 24]} />
          <meshStandardMaterial color="#111111" roughness={0.3} />
        </mesh>
        {/* Tassel String & Bead */}
        <mesh position={[0.3, -0.1, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.25, 8]} />
          <meshStandardMaterial color="#FF7A00" emissive="#FF7A00" emissiveIntensity={0.8} />
        </mesh>
      </group>
    </group>
  );
};
