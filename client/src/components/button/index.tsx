import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: 'filled' | 'outlined';
  handleClick?: (e?: React.SyntheticEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  handleClick,
  ...props
}) => {
  return (
    <button
      className='w-fit px-4 py-2.5 font-bold text-sm rounded-md bg-black text-white'
      onClick={handleClick}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
