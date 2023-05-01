// button.component.tsx

// button.component.tsx

import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color'>;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;
//* ADD NEW FUNCTIONALITY
export interface ButtonProps extends ButtonBaseProps {
  label: string;
  onClick?: () => void;
}

export const G4Button = ({ label, ...rest }: ButtonProps) => <MuiButton {...rest}  >{label}</MuiButton>;