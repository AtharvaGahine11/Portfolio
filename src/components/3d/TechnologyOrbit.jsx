import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const techIcons = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'Python', color: '#3776AB' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'GitHub', color: '#181717' },
  { name: 'JavaScript', color: '#F7DF1E' },
];

export const TechnologyOrbit = ({ radius = 3.5 }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 3D Orbit Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
        <meshBasicMaterial color="#D9D9D4" side={THREE.DoubleSide} opacity={0.5} transparent />
      </mesh>

      {/* Orbiting Tech Nodes */}
      {techIcons.map((tech, i) => {
        const angle = (i / techIcons.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 1.5) * 0.4;

        return (
          <group key={tech.name} position={[x, y, z]}>
            {/* 3D Node Sphere */}
            <mesh castShadow>
              <sphereGeometry args={[0.22, 24, 24]} />
              <meshStandardMaterial
                color={tech.color}
                roughness={0.2}
                metalness={0.4}
              />
            </mesh>

            {/* Subtle Outer Glow Ring */}
            <mesh>
              <sphereGeometry args={[0.28, 16, 16]} />
              <meshBasicMaterial color={tech.color} transparent opacity={0.15} />
            </mesh>

            {/* 3D Text Label */}
            <Text
              position={[0, 0.4, 0]}
              fontSize={0.22}
              color="#111111"
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff"
              anchorX="center"
              anchorY="middle"
            >
              {tech.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
};
