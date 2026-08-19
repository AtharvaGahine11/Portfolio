import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const AwsCloudMiniWorld = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Base Platform */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <cylinderGeometry args={[2.5, 2.7, 0.2, 32]} />
        <meshStandardMaterial color="#F0F0EC" roughness={0.3} />
      </mesh>

      {/* Stylized 3D Cloud Mesh */}
      <group position={[0, 1.2, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.7, 24, 24]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
        </mesh>
        <mesh position={[-0.5, -0.1, 0]} castShadow>
          <sphereGeometry args={[0.5, 24, 24]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
        </mesh>
        <mesh position={[0.5, -0.1, 0]} castShadow>
          <sphereGeometry args={[0.5, 24, 24]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
        </mesh>
      </group>

      {/* Cloud Nodes: Gateway, EC2, RDS */}
      <group position={[-1.2, 0.4, 0.6]}>
        <mesh castShadow>
          <boxGeometry args={[0.6, 0.4, 0.6]} />
          <meshStandardMaterial color="#FF9900" />
        </mesh>
        <Text position={[0, 0.35, 0]} fontSize={0.11} color="#111111" anchorX="center">
          API Gateway
        </Text>
      </group>

      <group position={[0, 0.4, 0.8]}>
        <mesh castShadow>
          <boxGeometry args={[0.6, 0.4, 0.6]} />
          <meshStandardMaterial color="#FF9900" />
        </mesh>
        <Text position={[0, 0.35, 0]} fontSize={0.11} color="#111111" anchorX="center">
          EC2 / Flask
        </Text>
      </group>

      <group position={[1.2, 0.4, 0.6]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.5, 24]} />
          <meshStandardMaterial color="#336791" />
        </mesh>
        <Text position={[0, 0.35, 0]} fontSize={0.11} color="#111111" anchorX="center">
          RDS MySQL
        </Text>
      </group>
    </group>
  );
};
