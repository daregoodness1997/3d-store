import React, { ButtonHTMLAttributes } from 'react';
import { useSnapshot } from 'valtio';
import state from '../../store';
import { getContrastingColor } from '../../config/helpers';

type VariantType = 'filled' | 'outlined';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: VariantType;
  className?: string;
  handleClick?: (e?: React.SyntheticEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  handleClick,
  className,
  ...props
}) => {
  const snap = useSnapshot(state);
  const generateStyles = (variant: VariantType) => {
    if (variant === 'filled') {
      return {
        background: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
    if (variant === 'outlined') {
      return { border: `1px solid ${snap.color}`, color: snap.color };
    }
  };
  return (
    <button
      className={`w-fit ${
        className ? className : 'px-2 py-1.5'
      }  font-bold text-sm rounded-md px-2 py-1.5`}
      onClick={handleClick}
      style={generateStyles(variant)}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
