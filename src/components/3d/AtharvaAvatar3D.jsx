import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

export const AtharvaAvatar3D = ({ position = [2.6, 0.1, -1.2], scale = 1.15, isIntro = false }) => {
  const meshRef = useRef();
  const groupRef = useRef();

  // Load Atharva's high-res studio portrait texture
  const texture = useTexture('/assets/atharva_hero_studio.jpg');
  if (texture) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      
      // Gentle floating motion
      groupRef.current.position.y = position[1] + Math.sin(t * 1.4) * 0.08;
      
      // Interactive mouse tilt parallax
      const targetRotationY = (state.mouse.x * Math.PI) / 14;
      const targetRotationX = (state.mouse.y * Math.PI) / 18;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.08);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetRotationX, 0.08);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Soft Backlight Glowing Aura Disk */}
      <mesh position={[0, 0.2, -0.15]}>
        <circleGeometry args={[2.8, 64]} />
        <meshBasicMaterial color="#FF7A00" transparent opacity={0.25} />
      </mesh>

      {/* Outer White Glass Frame Panel */}
      <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 3.4, 0.08]} />
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Warm Orange Rim Accent Frame */}
      <mesh position={[0, 0, -0.01]}>
        <boxGeometry args={[4.28, 3.48, 0.04]} />
        <meshStandardMaterial
          color="#FF7A00"
          roughness={0.2}
          metalness={0.8}
          emissive="#FF7A00"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Main Texture Mapped Studio Photo Plane */}
      <mesh ref={meshRef} position={[0, 0, 0.04]}>
        <planeGeometry args={[4.0, 3.2]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.2}
          metalness={0.0}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floating Glass HUD Badges around 3D Studio */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
        <group position={[1.8, 1.2, 0.3]}>
          <mesh>
            <planeGeometry args={[1.5, 0.6]} />
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.9} roughness={0.1} />
          </mesh>
          <Text position={[0, 0.1, 0.02]} fontSize={0.12} color="#FF7A00" anchorX="center">
            SYSTEM ARCHITECT
          </Text>
          <Text position={[0, -0.1, 0.02]} fontSize={0.1} color="#111111" anchorX="center">
            💻 Monitor Telemetry
          </Text>
        </group>
      </Float>

      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.5}>
        <group position={[1.9, -0.8, 0.3]}>
          <mesh>
            <planeGeometry args={[1.5, 0.6]} />
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.9} roughness={0.1} />
          </mesh>
          <Text position={[0, 0.1, 0.02]} fontSize={0.12} color="#FF7A00" anchorX="center">
            CLOUD & DEVOPS
          </Text>
          <Text position={[0, -0.1, 0.02]} fontSize={0.1} color="#111111" anchorX="center">
            ☁ AWS • K8s • Docker
          </Text>
        </group>
      </Float>

      {/* Dedicated Front Spotlight */}
      <spotLight
        position={[0, 2, 4]}
        intensity={2.8}
        angle={0.6}
        penumbra={0.5}
        color="#FFF8F0"
        castShadow
      />
    </group>
  );
};
