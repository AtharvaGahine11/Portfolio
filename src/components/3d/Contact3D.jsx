import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const Contact3D = ({ position = [0, 0, -4] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = position[1] + Math.sin(t * 1.2) * 0.15;
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Large Floating 3D Name Backdrop: ATHARVA */}
      <Text
        position={[0, 1.4, 0]}
        fontSize={1.8}
        color="#111111"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
        outlineWidth={0.03}
        outlineColor="#FF7A00"
      >
        ATHARVA
      </Text>

      {/* Large Floating 3D Name Backdrop: GAHINE */}
      <Text
        position={[0, -0.8, 0]}
        fontSize={1.8}
        color="#FF7A00"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
        outlineWidth={0.03}
        outlineColor="#111111"
      >
        GAHINE
      </Text>

      {/* Subtle Metallic Base Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]} position={[0, -1.8, -1]}>
        <ringGeometry args={[3.8, 3.84, 64]} />
        <meshBasicMaterial color="#FF7A00" side={THREE.DoubleSide} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};
