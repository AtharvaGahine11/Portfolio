import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const DevOpsNovaMiniWorld = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  const pipelineSteps = [
    { name: 'Git', color: '#F05032' },
    { name: 'Jenkins', color: '#D24939' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'K8s', color: '#326CE5' },
    { name: 'Grafana', color: '#F46800' },
  ];

  return (
    <group ref={groupRef} position={position}>
      {/* Base Platform */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <cylinderGeometry args={[2.5, 2.7, 0.2, 32]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>

      {/* CI/CD Conveyor Assembly Pipeline Nodes */}
      {pipelineSteps.map((step, idx) => {
        const x = (idx - 2) * 0.9;
        return (
          <group key={step.name} position={[x, 0.5, 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.7, 0.7, 0.7]} />
              <meshStandardMaterial color={step.color} roughness={0.2} metalness={0.4} />
            </mesh>
            <Text position={[0, 0.6, 0]} fontSize={0.14} color="#111111" anchorX="center">
              {step.name}
            </Text>
          </group>
        );
      })}

      {/* Conveyor Belt Track */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[4.2, 0.08, 0.4]} />
        <meshStandardMaterial color="#333333" metalness={0.8} />
      </mesh>
    </group>
  );
};
