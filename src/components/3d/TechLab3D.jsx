import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Float } from '@react-three/drei';
import * as THREE from 'three';

// Individual 3D Floating Tech Logo Badge Component
const TechLogoNode = ({ texturePath, position, color, isHighlighted }) => {
  const meshRef = useRef();
  const texture = useTexture(texturePath);
  if (texture) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
      <group position={position}>
        {/* Connection Beam Line to Center */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={isHighlighted ? 0.6 : 0.2} />
        </mesh>

        {/* Outer 3D Badge Disc Backdrop */}
        <mesh position={[0, 0, -0.05]}>
          <cylinderGeometry args={[0.65, 0.65, 0.08, 32]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.1}
            metalness={0.2}
            emissive={color}
            emissiveIntensity={isHighlighted ? 0.3 : 0.05}
            transparent
            opacity={isHighlighted ? 0.95 : 0.4}
          />
        </mesh>

        {/* 3D Rim Frame */}
        <mesh position={[0, 0, -0.01]}>
          <torusGeometry args={[0.66, 0.03, 16, 32]} />
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Mapped 3D Tech Logo Plane */}
        <mesh ref={meshRef} position={[0, 0, 0.02]}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshStandardMaterial
            map={texture}
            transparent={true}
            roughness={0.1}
            metalness={0.0}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
};

export const TechLab3D = ({ activeCategory = 'ALL', position = [0, 0, -3] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  const techLogos = [
    { name: 'Python', path: '/assets/tech/python.png', pos: [-3.6, 2.2, -0.5], color: '#3776AB', group: 'LANGUAGES' },
    { name: 'JavaScript', path: '/assets/tech/javascript.png', pos: [-1.4, 2.8, -1.0], color: '#F7DF1E', group: 'LANGUAGES' },
    { name: 'HTML5', path: '/assets/tech/html.png', pos: [1.4, 2.8, -1.0], color: '#E34F26', group: 'FRONTEND' },
    { name: 'CSS3', path: '/assets/tech/css.png', pos: [3.6, 2.2, -0.5], color: '#1572B6', group: 'FRONTEND' },
    { name: 'React', path: '/assets/tech/javascript.png', pos: [-3.2, -1.4, -0.5], color: '#61DAFB', group: 'FRONTEND' },
    { name: 'Python DB', path: '/assets/tech/python.png', pos: [3.2, -1.4, -0.5], color: '#FF7A00', group: 'BACKEND' },
  ];

  return (
    <group ref={groupRef} position={position}>
      {/* Central Engineering Core Sphere */}
      <mesh position={[0, 0, -1]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#FF7A00"
          roughness={0.2}
          emissive="#FF7A00"
          emissiveIntensity={0.6}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Ambient Orbit Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]} position={[0, 0, -1]}>
        <ringGeometry args={[3.6, 3.65, 64]} />
        <meshBasicMaterial color="#FF7A00" side={THREE.DoubleSide} transparent opacity={0.25} />
      </mesh>

      {/* Render 3D Tech Logo Nodes */}
      {techLogos.map((tech) => {
        const isHighlighted = activeCategory === 'ALL' || activeCategory === tech.group;
        return (
          <TechLogoNode
            key={tech.name}
            texturePath={tech.path}
            position={tech.pos}
            color={tech.color}
            isHighlighted={isHighlighted}
          />
        );
      })}
    </group>
  );
};
