import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { MaterialProps, NodeProps, useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import state from '../../store';
import { Camera, HexColorString, Mesh } from 'three';

const Shirt = () => {
  const snap = useSnapshot(state);
  interface CustomGLTF extends GLTF {
    materials: any;
    nodes: Record<any, Mesh | undefined>;
  }

  const { nodes, materials } = useGLTF('/shirt_baked.glb') as CustomGLTF;

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  const color: HexColorString | string = `${snap.color}`;

  useFrame((state, delta) =>
    // @ts-ignore
    easing.dampC(materials.lambert1.color, color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);
  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
