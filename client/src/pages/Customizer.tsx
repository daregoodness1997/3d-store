import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { Button, AIPicker, ColorPicker, FilePicker, Tab } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [generatingImage, setGeneratingImage] = useState<boolean>(false);

  // generate Tab Content
  const generateTabContent = () => {};
  return (
    <AnimatePresence mode='wait'>
      {!snap.intro && (
        <motion.section>
          <motion.div
            key='custom'
            className='absolute top-0 left-0  z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map(tab => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className='absolute top-10 right-10'
            {...slideAnimation('down')}
          >
            <Button
              title='Go Back'
              variant='filled'
              handleClick={() => (state.intro = true)}
            />
          </motion.div>
          <motion.div
            className='filtertabs-container'
            {...slideAnimation('up')}
          >
            {FilterTabs.map(tab => (
              <Tab
                key={tab.name}
                tab={tab}
                handleClick={() => {}}
                isFilterTab
              />
            ))}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
