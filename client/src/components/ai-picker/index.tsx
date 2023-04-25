import React from 'react';
import Button from '../button';

interface Props {
  prompt: string;
  setPrompt: (value?: string) => void;
  generatingImage: boolean;
  handleSubmit: (value?: any) => void;
}

const AIPicker: React.FC<Props> = ({
  prompt,
  setPrompt,
  generatingImage,
  handleSubmit,
}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        rows={5}
        placeholder='Enter a prompt'
        onChange={e => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap grid-2'>
        {generatingImage ? (
          <Button
            title='Asking AI...'
            variant='outlined'
            className='w-full text-xs font-normal'
          />
        ) : (
          <div className='flex flex-wrap justify-end gap-2 w-full'>
            <Button
              title='AI Logo'
              variant='outlined'
              className='text-xs font-normal'
              handleClick={() => handleSubmit('logo')}
            />
            <Button
              title='AI Full'
              variant='filled'
              className='text-xs font-normal'
              handleClick={() => handleSubmit('full')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
