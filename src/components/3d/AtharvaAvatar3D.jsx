import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export const AtharvaAvatar3D = ({ position = [0, 0.4, 0], scale = 1.2, isIntro = false }) => {
  const meshRef = useRef();
  const groupRef = useRef();

  // Load Atharva's high-res portrait texture using Drei's optimized loader
  const texture = useTexture('/assets/atharva.png');
  if (texture) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.1;
      
      // Mouse parallax interactive rotation
      const targetRotationY = (state.mouse.x * Math.PI) / 10;
      const targetRotationX = (state.mouse.y * Math.PI) / 14;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.08);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetRotationX, 0.08);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Outer Glow Ambient Frame */}
      <mesh position={[0, 0, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 4.0, 0.15]} />
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      {/* Warm Orange Metallic Rim Frame */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[3.28, 4.08, 0.05]} />
        <meshStandardMaterial
          color="#FF7A00"
          roughness={0.15}
          metalness={0.9}
          emissive="#FF7A00"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Main Texture Mapped Atharva Portrait Plane */}
      <mesh ref={meshRef} position={[0, 0, 0.08]}>
        <planeGeometry args={[3.0, 3.8]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.2}
          metalness={0.0}
          transparent={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Dedicated Front Spotlight for Atharva's Face */}
      <spotLight
        position={[0, 2, 4]}
        intensity={2.5}
        angle={0.6}
        penumbra={0.5}
        color="#FFF8F0"
        castShadow
      />

      {/* 3D Base Architectural Pedestal */}
      <mesh position={[0, -2.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.8, 0.4, 32]} />
        <meshStandardMaterial color="#EAEAEA" roughness={0.3} metalness={0.3} />
      </mesh>

      {/* Live Glowing Status Indicator */}
      <mesh position={[0, -1.85, 1.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#FF7A00" emissive="#FF7A00" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};
