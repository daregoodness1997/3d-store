import React, { Suspense } from 'react';
import { Canvas as Cs } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Backdrop from './components/Backdrop';
import Shirt from './components/Shirt';
import CamerRig from './components/CamerRig';
import { Loader } from '../components';

const Canvas = () => {
  return (
    <Cs
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        <CamerRig>
          <Backdrop />

          <Center>
            <Shirt />
          </Center>
        </CamerRig>
      </Suspense>
    </Cs>
  );
};

export default Canvas;
