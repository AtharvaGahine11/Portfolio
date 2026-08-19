import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { StudioLighting } from './StudioLighting';
import { SceneController } from './SceneController';

export const MainCanvas = ({ activeSection, activeTechCategory, selectedSystemNode, onSelectSystemNode }) => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0.4, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        shadows
      >
        <StudioLighting />
        <Suspense fallback={null}>
          <SceneController
            activeSection={activeSection}
            activeTechCategory={activeTechCategory}
            selectedSystemNode={selectedSystemNode}
            onSelectSystemNode={onSelectSystemNode}
          />
        </Suspense>

        {/* OrbitControls enabled for interactive inspection */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
};
