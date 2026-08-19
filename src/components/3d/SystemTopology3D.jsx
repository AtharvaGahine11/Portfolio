import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const SystemTopology3D = ({ activeNode, onSelectNode, position = [0, 0, -3.5] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  const topologyNodes = [
    { id: 'distributed-systems', name: 'Distributed Systems', pos: [0, 2.5, -1], color: '#FF7A00' },
    { id: 'microservices', name: 'Microservices', pos: [-3, 1.2, 0], color: '#2496ED' },
    { id: 'replication', name: 'Replication', pos: [3, 1.2, 0], color: '#47A248' },
    { id: 'leader-election', name: 'Leader Election', pos: [-2.5, -1.2, 0.5], color: '#9C27B0' },
    { id: 'consensus', name: 'Consensus', pos: [0, -0.8, 1], color: '#E91E63' },
    { id: 'fault-tolerance', name: 'Fault Tolerance', pos: [2.5, -1.2, 0.5], color: '#FFCA28' },
    { id: 'realtime-comm', name: 'Real-Time Sync', pos: [-1.8, -2.5, -1], color: '#00BCD4' },
    { id: 'monitoring', name: 'Observability', pos: [1.8, -2.5, -1], color: '#FF9900' },
  ];

  return (
    <group ref={groupRef} position={position}>
      {topologyNodes.map((node) => {
        const isSelected = activeNode === node.id;
        const points = [new THREE.Vector3(0, 2.5, -1), new THREE.Vector3(...node.pos)];
        const lineGeom = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <group key={node.id}>
            {/* Connection Line to Center */}
            <primitive object={new THREE.Line(lineGeom, new THREE.LineBasicMaterial({
              color: isSelected ? '#FF7A00' : '#D9D9D4',
              linewidth: isSelected ? 2 : 1,
              transparent: true,
              opacity: isSelected ? 0.6 : 0.15,
            }))} />

            {/* Interactive Node Sphere */}
            <mesh
              position={node.pos}
              onClick={() => onSelectNode(node.id)}
            >
              <sphereGeometry args={[isSelected ? 0.3 : 0.18, 24, 24]} />
              <meshStandardMaterial
                color={node.color}
                roughness={0.3}
                metalness={0.2}
                emissive={node.color}
                emissiveIntensity={isSelected ? 0.5 : 0.15}
                transparent
                opacity={isSelected ? 0.9 : 0.4}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};
