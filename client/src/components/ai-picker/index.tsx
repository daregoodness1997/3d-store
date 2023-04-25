import React from 'react';

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
  return <div>AIPicker</div>;
};

export default AIPicker;
