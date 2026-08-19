import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const TechLab3D = ({ activeCategory = 'ALL', position = [0, 0, -3] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const nodes = [
    { name: 'Python', pos: [-4, 2, -1], color: '#3776AB', group: 'LANGUAGES' },
    { name: 'React', pos: [-2.2, 3, -0.5], color: '#61DAFB', group: 'FRONTEND' },
    { name: 'Node.js', pos: [0, 3.2, -1], color: '#68A063', group: 'BACKEND' },
    { name: 'MongoDB', pos: [2.2, 3, -1.5], color: '#47A248', group: 'DATABASE' },
    { name: 'Docker', pos: [4, 2, -1], color: '#2496ED', group: 'DEVOPS' },
    { name: 'AWS', pos: [-3, -0.5, 0], color: '#FF9900', group: 'CLOUD' },
    { name: 'Socket.IO', pos: [0, -0.2, 0.5], color: '#FF7A00', group: 'REAL-TIME' },
    { name: 'Kubernetes', pos: [3, -0.5, 0], color: '#326CE5', group: 'DEVOPS' },
    { name: 'Machine Learning', pos: [-1.8, -2.5, -1], color: '#E91E63', group: 'AI / ML' },
    { name: 'System Design', pos: [1.8, -2.5, -1], color: '#9C27B0', group: 'SYSTEM DESIGN' },
  ];

  return (
    <group ref={groupRef} position={position}>
      {/* Central Engineering Core Sphere */}
      <mesh position={[0, 0, -1]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#FF7A00"
          roughness={0.2}
          emissive="#FF7A00"
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Ambient Orbit Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]} position={[0, 0, -1]}>
        <ringGeometry args={[3.2, 3.24, 64]} />
        <meshBasicMaterial color="#FF7A00" side={THREE.DoubleSide} transparent opacity={0.25} />
      </mesh>

      {/* Nodes & Lines */}
      {nodes.map((node) => {
        const isHighlighted = activeCategory === 'ALL' || activeCategory === node.group;

        const points = [new THREE.Vector3(0, 0, -1), new THREE.Vector3(...node.pos)];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <group key={node.name}>
            {/* Energy Connection Line */}
            <primitive object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({
              color: isHighlighted ? '#FF7A00' : '#D9D9D4',
              linewidth: isHighlighted ? 2 : 1,
              transparent: true,
              opacity: isHighlighted ? 0.5 : 0.15,
            }))} />

            {/* Node Mesh */}
            <mesh position={node.pos}>
              <sphereGeometry args={[isHighlighted ? 0.22 : 0.14, 24, 24]} />
              <meshStandardMaterial
                color={node.color}
                roughness={0.3}
                metalness={0.2}
                emissive={node.color}
                emissiveIntensity={isHighlighted ? 0.5 : 0.1}
                transparent
                opacity={isHighlighted ? 0.85 : 0.35}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};
