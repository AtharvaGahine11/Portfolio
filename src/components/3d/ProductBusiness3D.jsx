import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

export const ProductBusiness3D = ({ position = [3.4, -0.2, -2] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Central 3D Indian Rupee (₹) Symbol */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
        <Text
          position={[0, 0.4, 0]}
          fontSize={2.4}
          color="#FF7A00"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.04}
          outlineColor="#111111"
        >
          ₹
        </Text>
      </Float>

      {/* Floating 3D Financial Growth & Metric Nodes */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-1.2, 1.2, 0.5]}>
          <cylinderGeometry args={[0.3, 0.3, 0.08, 24]} />
          <meshStandardMaterial color="#00FF66" emissive="#00FF66" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.0} floatIntensity={1.5}>
        <Text
          position={[1.2, 1.4, 0.2]}
          fontSize={0.8}
          color="#111111"
          anchorX="center"
          anchorY="middle"
        >
          %
        </Text>
      </Float>

      <Float speed={2.2} rotationIntensity={1.8} floatIntensity={2.2}>
        <mesh position={[1.4, -1.0, 0.3]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#FF7A00" roughness={0.2} metalness={0.8} wireframe />
        </mesh>
      </Float>

      {/* Ambient Orbit Base Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]} position={[0, -1.2, 0]}>
        <ringGeometry args={[2.2, 2.24, 64]} />
        <meshBasicMaterial color="#FF7A00" side={THREE.DoubleSide} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};
