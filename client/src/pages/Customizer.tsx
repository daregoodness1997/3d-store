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

type FilterType = {
  logoShirt: boolean;
  stylistShirt: boolean;
};

type FileType = 'logo-texture' | 'full-texture';

export type EditorTabs =
  | 'colorpicker'
  | 'filepicker'
  | 'aipicker'
  | string
  | null;

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState<File>();
  const [prompt, setPrompt] = useState<string>('');
  const [activeEditorTab, setActiveEditorTab] = useState<EditorTabs>(null);
  const [activeFilterTab, setActiveFilterTab] = useState<FilterType>({
    logoShirt: true,
    stylistShirt: false,
  });
  const [generatingImage, setGeneratingImage] = useState<boolean>(false);
  const [preview, setPreview] = useState<string | ArrayBuffer>('');

  const handleActiveFilterTab = tabName => {
    switch (tabName) {
      case 'logoShirt':
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName];
        break;

      default:
        state.isFullTexture = true;
        state.isLogoTexture = false;
    }

    setActiveFilterTab(prevState => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  // Handle decal func
  const handleDecals = (type: any, result: unknown) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;

    if (activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };
  // read user file
  const readFile = (type: any) => {
    reader(file).then(result => {
      handleDecals(type, result);
      setActiveEditorTab('');
    });
  };

  const handleSubmit = async () => {};

  // generate Tab Content
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />;
      case 'filepicker':
        return (
          <FilePicker
            file={file}
            setFile={setFile}
            readFile={readFile}
            preview={preview}
            setPreview={setPreview}
          />
        );
      case 'aipicker':
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImage={generatingImage}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

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
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
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
                handleClick={() => handleActiveFilterTab(tab.name)}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
              />
            ))}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
