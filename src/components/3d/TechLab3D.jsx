import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const TechLab3D = ({ activeCategory = 'ALL', position = [0, 0, -4.5] }) => {
  const groupRef = useRef();
  const sphereRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.12;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.2;
      sphereRef.current.rotation.z = t * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.25;
    }
  });

  const nodes = [
    { pos: [-3.8, 2.0, -1], color: '#FF7A00', group: 'LANGUAGES' },
    { pos: [-1.8, 2.8, -1.5], color: '#61DAFB', group: 'FRONTEND' },
    { pos: [1.8, 2.8, -1.5], color: '#68A063', group: 'BACKEND' },
    { pos: [3.8, 2.0, -1], color: '#47A248', group: 'DATABASE' },
    { pos: [-3.2, -1.8, -1], color: '#2496ED', group: 'DEVOPS' },
    { pos: [3.2, -1.8, -1], color: '#9C27B0', group: 'SYSTEM DESIGN' },
  ];

  return (
    <group ref={groupRef} position={position}>
      {/* Central Holographic Geodesic Sphere */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#FF7A00"
          roughness={0.1}
          metalness={0.9}
          wireframe
          emissive="#FF7A00"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#FF7A00"
          emissive="#FF7A00"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Counter-Rotating Orbital Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3.2, 0.03, 16, 80]} />
        <meshBasicMaterial color="#FF7A00" transparent opacity={0.4} />
      </mesh>

      {/* Orbiting Telemetry Nodes & Rays */}
      {nodes.map((node, i) => {
        const isHighlighted = activeCategory === 'ALL' || activeCategory === node.group;
        return (
          <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1.5}>
            <group position={node.pos}>
              {/* Glowing Node Sphere */}
              <mesh castShadow>
                <sphereGeometry args={[isHighlighted ? 0.22 : 0.14, 24, 24]} />
                <meshStandardMaterial
                  color={node.color}
                  roughness={0.2}
                  metalness={0.5}
                  emissive={node.color}
                  emissiveIntensity={isHighlighted ? 0.6 : 0.15}
                  transparent
                  opacity={isHighlighted ? 0.85 : 0.3}
                />
              </mesh>

              {/* Halo Ring around Node */}
              {isHighlighted && (
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                  <torusGeometry args={[0.35, 0.015, 12, 32]} />
                  <meshBasicMaterial color={node.color} transparent opacity={0.6} />
                </mesh>
              )}
            </group>
          </Float>
        );
      })}
    </group>
  );
};
