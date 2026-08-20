import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Float } from '@react-three/drei';
import * as THREE from 'three';

// Individual 3D Floating Tech Sticker Component
const TechStickerNode = ({ texturePath, position, color, isHighlighted, scale = 1.2 }) => {
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
    <Float speed={2.2} rotationIntensity={1.2} floatIntensity={1.8}>
      <group position={position} scale={scale}>
        {/* Soft Backlight Glow Aura */}
        <mesh position={[0, 0, -0.05]}>
          <circleGeometry args={[0.7, 32]} />
          <meshBasicMaterial color={color} transparent opacity={isHighlighted ? 0.3 : 0.08} />
        </mesh>

        {/* 3D Floating Cutout Sticker Plane */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <planeGeometry args={[1.2, 1.2]} />
          <meshStandardMaterial
            map={texture}
            transparent={true}
            roughness={0.2}
            metalness={0.0}
            side={THREE.DoubleSide}
            alphaTest={0.01}
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

  const techStickers = [
    { name: 'Python', path: '/assets/tech/python.png', pos: [-3.8, 2.2, -0.5], color: '#3776AB', group: 'LANGUAGES' },
    { name: 'JavaScript', path: '/assets/tech/javascript.png', pos: [-1.4, 2.8, -1.0], color: '#F7DF1E', group: 'LANGUAGES' },
    { name: 'HTML5', path: '/assets/tech/html.png', pos: [1.4, 2.8, -1.0], color: '#E34F26', group: 'FRONTEND' },
    { name: 'CSS3', path: '/assets/tech/css.png', pos: [3.8, 2.2, -0.5], color: '#1572B6', group: 'FRONTEND' },
    { name: 'Python DB', path: '/assets/tech/python.png', pos: [-3.2, -1.4, -0.5], color: '#FF7A00', group: 'BACKEND' },
    { name: 'JavaScript React', path: '/assets/tech/javascript.png', pos: [3.2, -1.4, -0.5], color: '#61DAFB', group: 'FRONTEND' },
  ];

  return (
    <group ref={groupRef} position={position}>
      {/* Central Engineering Core Sphere */}
      <mesh position={[0, 0, -1]}>
        <sphereGeometry args={[0.45, 32, 32]} />
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

      {/* Render 3D Tech Sticker Nodes */}
      {techStickers.map((tech) => {
        const isHighlighted = activeCategory === 'ALL' || activeCategory === tech.group;
        return (
          <TechStickerNode
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
