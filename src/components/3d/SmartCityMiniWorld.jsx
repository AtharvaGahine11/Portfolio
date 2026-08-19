import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const SmartCityMiniWorld = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.18;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* City Intersection Platform */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <cylinderGeometry args={[2.5, 2.7, 0.2, 32]} />
        <meshStandardMaterial color="#333333" roughness={0.7} />
      </mesh>

      {/* Crossroad lanes */}
      <mesh position={[0, -0.09, 0]}>
        <boxGeometry args={[4.8, 0.02, 0.8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      <mesh position={[0, -0.09, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[4.8, 0.02, 0.8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Traffic Light Post */}
      <group position={[0.6, 0.6, 0.6]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.04, 0.04, 1.2, 16]} />
          <meshStandardMaterial color="#111111" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[0.16, 0.4, 0.16]} />
          <meshStandardMaterial color="#222222" />
        </mesh>
        {/* Active Green Light */}
        <mesh position={[0, 0.45, 0.09]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#00FF66" emissive="#00FF66" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* Vehicles */}
      <mesh position={[-1.2, 0.15, 0.2]} castShadow>
        <boxGeometry args={[0.6, 0.3, 0.3]} />
        <meshStandardMaterial color="#FF7A00" />
      </mesh>
      <mesh position={[1.2, 0.15, -0.2]} castShadow>
        <boxGeometry args={[0.6, 0.3, 0.3]} />
        <meshStandardMaterial color="#2496ED" />
      </mesh>
    </group>
  );
};
