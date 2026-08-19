import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { IntroStudio } from './IntroStudio';
import { Workspace3D } from './Workspace3D';
import { TechLab3D } from './TechLab3D';
import { HealthFlowMiniWorld } from './HealthFlowMiniWorld';
import { ConfigSyncMiniWorld } from './ConfigSyncMiniWorld';
import { DevOpsNovaMiniWorld } from './DevOpsNovaMiniWorld';
import { SystemTopology3D } from './SystemTopology3D';
import { Education3D } from './Education3D';
import { Contact3D } from './Contact3D';
import { ProductBusiness3D } from './ProductBusiness3D';
import { Methodology3D } from './Methodology3D';

export const SceneController = ({ activeSection, activeTechCategory, selectedSystemNode, onSelectSystemNode }) => {
  const { camera } = useThree();
  const targetCamPos = useRef(new THREE.Vector3(0, 0.4, 6.5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0.4, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0.4, 0));

  useFrame(() => {
    switch (activeSection) {
      case 'intro':
        targetCamPos.current.set(0, 0.5, 7.5);
        targetLookAt.current.set(0, 0.4, 0);
        break;
      case 'hero':
        targetCamPos.current.set(0, 0.6, 6.2);
        targetLookAt.current.set(0, 0.2, 0);
        break;
      case 'about':
        targetCamPos.current.set(0, 1.2, 5.5);
        targetLookAt.current.set(0, 0.8, 0);
        break;
      case 'skills':
        targetCamPos.current.set(0, 0, 8.5);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'projects':
        targetCamPos.current.set(0, 0.4, 7.0);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'system-design':
        targetCamPos.current.set(0, 0, 8.5);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'how-i-build':
        targetCamPos.current.set(0, 0.4, 7.5);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'education':
        targetCamPos.current.set(0, 0.4, 7.0);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'product-business':
        targetCamPos.current.set(0, 0.4, 7.0);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'contact':
        targetCamPos.current.set(0, 0, 8.5);
        targetLookAt.current.set(0, 0, 0);
        break;
      default:
        targetCamPos.current.set(0, 0.4, 7.5);
        targetLookAt.current.set(0, 0.4, 0);
        break;
    }

    // Smooth camera position interpolation
    camera.position.lerp(targetCamPos.current, 0.05);

    // Smooth lookAt interpolation
    currentLookAt.current.lerp(targetLookAt.current, 0.05);
    camera.lookAt(currentLookAt.current);
  });

  return (
    <>
      {activeSection === 'intro' && <IntroStudio />}
      {activeSection === 'hero' && <IntroStudio ringPosition={[3.2, 0.4, -3.5]} ringScale={0.75} />}
      {activeSection === 'about' && <Workspace3D position={[3.2, -0.5, -2]} />}
      {activeSection === 'skills' && <TechLab3D activeCategory={activeTechCategory} position={[0, 0, -4]} />}
      {activeSection === 'projects' && <HealthFlowMiniWorld position={[3.2, -0.2, -2]} />}
      {activeSection === 'system-design' && (
        <SystemTopology3D activeNode={selectedSystemNode} onSelectNode={onSelectSystemNode} position={[0, 0, -4]} />
      )}
      {activeSection === 'how-i-build' && <Methodology3D position={[3.4, -0.2, -2.5]} />}
      {activeSection === 'education' && <Education3D position={[3.4, -0.2, -2]} />}
      {activeSection === 'product-business' && <ProductBusiness3D position={[3.4, -0.2, -2]} />}
      {activeSection === 'contact' && <Contact3D position={[0, 0.2, -1.5]} />}
    </>
  );
};
