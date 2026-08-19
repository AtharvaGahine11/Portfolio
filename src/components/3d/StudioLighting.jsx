import React from 'react';

export const StudioLighting = () => {
  return (
    <>
      {/* Soft Ambient light */}
      <ambientLight intensity={0.85} color="#FFFFFF" />

      {/* Main Studio Key Light */}
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2}
        color="#FFFBF5"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Soft Fill Light */}
      <directionalLight
        position={[-10, 10, -5]}
        intensity={0.4}
        color="#E6F0FF"
      />

      {/* Warm Accent Rim Light */}
      <spotLight
        position={[0, 12, -10]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.8}
        color="#FF7A00"
      />

      {/* Floor bounced light */}
      <directionalLight
        position={[0, -5, 5]}
        intensity={0.25}
        color="#FFFFFF"
      />
    </>
  );
};
