import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const HealthFlowMiniWorld = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Hospital Base Platform */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <cylinderGeometry args={[2.5, 2.7, 0.2, 32]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
      </mesh>

      {/* Red Cross Hospital Building Structure */}
      <group position={[0, 0.8, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.6, 1.6, 1.6]} />
          <meshStandardMaterial color="#F7F7F4" roughness={0.3} />
        </mesh>
        {/* Red Cross Icon */}
        <mesh position={[0, 0.4, 0.82]}>
          <boxGeometry args={[0.6, 0.2, 0.04]} />
          <meshStandardMaterial color="#FF3B30" emissive="#FF3B30" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, 0.4, 0.82]}>
          <boxGeometry args={[0.2, 0.6, 0.04]} />
          <meshStandardMaterial color="#FF3B30" emissive="#FF3B30" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Real-time Triage Screen */}
      <group position={[1.4, 0.6, 0.8]} rotation={[0, -0.4, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.0, 0.7, 0.06]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <Text position={[0, 0.1, 0.04]} fontSize={0.09} color="#00FF66" anchorX="center">
          SOCKET.IO SYNC
        </Text>
        <Text position={[0, -0.15, 0.04]} fontSize={0.07} color="#FFFFFF" anchorX="center">
          ER Patients: 14 | Beds: 4
        </Text>
      </group>

      {/* Emergency Ambulance Car */}
      <group position={[-1.4, 0.15, 1.0]} rotation={[0, 0.6, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.8, 0.4, 0.4]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        {/* Siren Light */}
        <mesh position={[0, 0.25, 0]}>
          <boxGeometry args={[0.15, 0.1, 0.15]} />
          <meshStandardMaterial color="#FF3B30" emissive="#FF3B30" emissiveIntensity={1} />
        </mesh>
      </group>
    </group>
  );
};
