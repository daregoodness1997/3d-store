import React from 'react';
import { Canvas as Cs } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Backdrop from './components/Backdrop';
import Shirt from './components/Shirt';
import CamerRig from './components/CamerRig';

const Canvas = () => {
  return (
    <Cs
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CamerRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CamerRig>
    </Cs>
  );
};

export default Canvas;
