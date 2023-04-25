import React from 'react';
import Button from '../button';

interface Props {
  file: File;
  setFile: (file?: File) => void;
  readFile: (file?: string) => void;
  preview: string | ArrayBuffer;
  setPreview: (file: string | ArrayBuffer) => void;
}

const FilePicker: React.FC<Props> = ({
  file,
  setFile,
  readFile,
  preview,
  setPreview,
}) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={e => {
            setFile(e.target.files[0]);
            const selectedImage = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.readyState === 2) {
                setPreview(reader.result);
              }
            };
            reader.readAsDataURL(selectedImage);
          }}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload Image
        </label>
        <p className='mt-1 text-gray-500 text-xs truncate'>
          {!file ? 'No file selected' : file.name}
        </p>
      </div>
      <img
        src={`${preview}`}
        alt={`${preview}`}
        className='block mt-1 rounded-md'
      />

      <div className='mt-4 flex flex-wrap gap-2 justify-end'>
        <Button
          title={`Logo`}
          variant='outlined'
          className='text-xs font-normal'
          handleClick={() => readFile('logo')}
        />
        <Button
          title={`Full`}
          variant='filled'
          className='text-xs font-normal'
          handleClick={() => readFile('full')}
        />
      </div>
    </div>
  );
};

export default FilePicker;
