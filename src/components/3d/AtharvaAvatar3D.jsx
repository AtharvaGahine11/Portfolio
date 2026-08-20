import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export const AtharvaAvatar3D = ({ position = [0, -0.2, 0.5], scale = 1.15, isIntro = false }) => {
  const meshRef = useRef();
  const groupRef = useRef();

  // Load Atharva's high-res portrait texture
  const texture = useTexture('/assets/atharva.png');
  if (texture) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      
      // Floating motion
      groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.08;
      
      // Interactive mouse tilt parallax
      const targetRotationY = (state.mouse.x * Math.PI) / 12;
      const targetRotationX = (state.mouse.y * Math.PI) / 16;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.08);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetRotationX, 0.08);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Radial Backlight Glowing Aura Disk */}
      <mesh position={[0, 0.2, -0.2]}>
        <circleGeometry args={[2.4, 64]} />
        <meshBasicMaterial color="#FF7A00" transparent opacity={0.35} />
      </mesh>

      {/* Glass Panel Backing */}
      <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 4.0, 0.1]} />
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Warm Orange Border Frame */}
      <mesh position={[0, 0, -0.01]}>
        <boxGeometry args={[3.26, 4.06, 0.04]} />
        <meshStandardMaterial
          color="#FF7A00"
          roughness={0.2}
          metalness={0.8}
          emissive="#FF7A00"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Main Texture Mapped Atharva Portrait Plane */}
      <mesh ref={meshRef} position={[0, 0, 0.06]}>
        <planeGeometry args={[3.0, 3.8]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.2}
          metalness={0.0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Dedicated Front Spotlight */}
      <spotLight
        position={[0, 2, 4]}
        intensity={2.8}
        angle={0.6}
        penumbra={0.5}
        color="#FFF8F0"
        castShadow
      />

      {/* 3D Base Pedestal */}
      <mesh position={[0, -2.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.8, 0.3, 32]} />
        <meshStandardMaterial color="#EAEAEA" roughness={0.3} metalness={0.3} />
      </mesh>
    </group>
  );
};
