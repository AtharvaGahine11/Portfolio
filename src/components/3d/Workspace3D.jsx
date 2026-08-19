import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const Workspace3D = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Wooden / Acrylic Developer Desk Top */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[5.2, 0.15, 2.4]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Desk Metal Legs */}
      <mesh position={[-2.4, -1.0, -0.9]} castShadow>
        <boxGeometry args={[0.1, 1.9, 0.1]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[2.4, -1.0, -0.9]} castShadow>
        <boxGeometry args={[0.1, 1.9, 0.1]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-2.4, -1.0, 0.9]} castShadow>
        <boxGeometry args={[0.1, 1.9, 0.1]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[2.4, -1.0, 0.9]} castShadow>
        <boxGeometry args={[0.1, 1.9, 0.1]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Main Monitor Screen */}
      <group position={[0, 1.1, -0.6]}>
        {/* Frame */}
        <mesh castShadow>
          <boxGeometry args={[2.8, 1.6, 0.08]} />
          <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Screen Display */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[2.7, 1.5]} />
          <meshStandardMaterial color="#0A0E17" roughness={0.1} emissive="#0A0E17" emissiveIntensity={0.5} />
        </mesh>
        {/* Stand */}
        <mesh position={[0, -0.95, 0]} castShadow>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#333333" metalness={0.9} />
        </mesh>
        <mesh position={[0, -1.1, 0.1]} castShadow>
          <boxGeometry args={[0.8, 0.04, 0.6]} />
          <meshStandardMaterial color="#333333" metalness={0.9} />
        </mesh>
        {/* Code Text on Monitor */}
        <Text
          position={[-1.2, 0.4, 0.05]}
          fontSize={0.08}
          color="#00FF66"
          anchorX="left"
          anchorY="top"
        >
          {`const system = new RealtimeEngine({
  nodes: ['Socket.IO', 'Express', 'MongoDB'],
  consensus: 'LeaderElection',
  monitoring: 'Prometheus'
});
system.startCluster(); // Running 60FPS`}
        </Text>
      </group>

      {/* Laptop */}
      <group position={[-1.5, 0.15, 0.3]} rotation={[0, 0.2, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.2, 0.04, 0.8]} />
          <meshStandardMaterial color="#D9D9D4" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.4, -0.38]} rotation={[-0.3, 0, 0]} castShadow>
          <boxGeometry args={[1.2, 0.8, 0.03]} />
          <meshStandardMaterial color="#111111" metalness={0.7} />
        </mesh>
      </group>

      {/* Coffee Cup */}
      <mesh position={[1.8, 0.18, 0.4]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.28, 24]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
      </mesh>
      <mesh position={[1.8, 0.32, 0.4]}>
        <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
        <meshStandardMaterial color="#5C3A21" roughness={0.9} />
      </mesh>

      {/* Server Rack on Side */}
      <group position={[3.2, 0.8, -0.4]}>
        <mesh castShadow>
          <boxGeometry args={[1.0, 1.8, 0.8]} />
          <meshStandardMaterial color="#1E1E1E" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Server LEDs */}
        <mesh position={[-0.3, 0.5, 0.41]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#FF7A00" emissive="#FF7A00" emissiveIntensity={1} />
        </mesh>
        <mesh position={[-0.1, 0.5, 0.41]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#00FF66" emissive="#00FF66" emissiveIntensity={1} />
        </mesh>
        <mesh position={[0.1, 0.5, 0.41]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#00AAFF" emissive="#00AAFF" emissiveIntensity={1} />
        </mesh>
      </group>
    </group>
  );
};
