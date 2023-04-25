import React from 'react';
import Button from '../button';

interface Props {
  file: File;
  setFile: (file?: File) => void;
  readFile: (file?: string) => void;
}

const FilePicker: React.FC<Props> = ({ file, setFile, readFile }) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={e => setFile(e.target.files[0])}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload Image
        </label>
        <p className='mt-2 text-gray-500 text-xs truncate'>
          {!file ? 'No file selected' : file.name}
        </p>
      </div>

      <div className='mt-4 flex flex-wrap gap-6 justify-end'>
        <Button title={`Logo`} variant='outlined' className='text-xs' />
        <Button title={`Okay`} variant='filled' className='text-xs' />
      </div>
    </div>
  );
};

export default FilePicker;
