import React from 'react';
import { Canvas as Cs } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Backdrop from './components/Backdrop';
import Shirt from './components/Shirt';
import CamerRig from './components/CamerRig';

const Canvas = () => {
  return (
    <Cs>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CamerRig>
        <Backdrop />
        {/* @ts-ignore */}
        <Center>
          <Shirt />
        </Center>
      </CamerRig>
    </Cs>
  );
};

export default Canvas;
