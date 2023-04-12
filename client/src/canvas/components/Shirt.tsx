import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { MaterialProps, NodeProps, useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import state from '../../store';
import { Camera, Mesh } from 'three';

const Shirt = () => {
  const snap = useSnapshot(state);
  interface CustomGLTF extends GLTF {
    materials: any;
    nodes: Record<any, Mesh | undefined>;
  }

  const { nodes, materials } = useGLTF('/shirt_baked.glb') as CustomGLTF;

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      ></mesh>
    </group>
  );
};

export default Shirt;
