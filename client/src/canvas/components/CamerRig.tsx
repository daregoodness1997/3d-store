import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../../store';
interface Props {
  children: React.ReactNode;
}

const CamerRig: React.FC<Props> = ({ children }) => {
  const groupRef = useRef();
  const snap = useSnapshot(state);

  // rotate the model smoothly
  return <group ref={groupRef}>{children}</group>;
};

export default CamerRig;
