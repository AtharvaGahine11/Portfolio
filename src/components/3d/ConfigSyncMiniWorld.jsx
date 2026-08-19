import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const ConfigSyncMiniWorld = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Data Center Floor */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <cylinderGeometry args={[2.5, 2.7, 0.2, 32]} />
        <meshStandardMaterial color="#F0F0EC" roughness={0.3} />
      </mesh>

      {/* Leader Server Rack (Center) */}
      <group position={[0, 0.8, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.9, 1.8, 0.9]} />
          <meshStandardMaterial color="#1E1E1E" metalness={0.7} roughness={0.2} />
        </mesh>
        {/* Leader Badge LED */}
        <mesh position={[0, 0.7, 0.46]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#FF7A00" emissive="#FF7A00" emissiveIntensity={1} />
        </mesh>
        <Text position={[0, 1.1, 0]} fontSize={0.16} color="#FF7A00" anchorX="center">
          LEADER
        </Text>
      </group>

      {/* Follower Replica Racks */}
      {[-1.5, 1.5].map((x, idx) => (
        <group key={idx} position={[x, 0.6, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.7, 1.4, 0.7]} />
            <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.5, 0.36]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#00FF66" emissive="#00FF66" emissiveIntensity={0.8} />
          </mesh>
          <Text position={[0, 0.85, 0]} fontSize={0.12} color="#666666" anchorX="center">
            REPLICA {idx + 1}
          </Text>
        </group>
      ))}

      {/* Heartbeat Pulsing Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <ringGeometry args={[1.3, 1.35, 32]} />
        <meshBasicMaterial color="#FF7A00" side={THREE.DoubleSide} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};
