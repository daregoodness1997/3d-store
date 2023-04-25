import React from 'react';
import { SketchPicker } from 'react-color';
import state from '../../store';
import { useSnapshot } from 'valtio';
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        onChange={(color: any) => (state.color = color.hex)}
        // presetColors={['#ccc', '#fff', '#726DE8']}
      />
    </div>
  );
};

export default ColorPicker;
