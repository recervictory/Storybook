import type { Meta, StoryObj } from '@storybook/react';
import {G4Button} from "../components/Button"
import { ButtonProps } from '../components/Button';


import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Button',
  component: G4Button,
  tags: ['autodocs'],
  
} satisfies Meta<typeof G4Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: "contained",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: "contained",
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: "contained",
    color: "success",
  },
};

const ButtonWithHooks = (args) => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');


  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (value === 'Primary') {
      setValue('Secondary');
    } else {
      setValue('Primary');
    }
  };
  return <G4Button onClick={handleOnChange}  label={value} {...args} />;
};

export const Extended: Story = {
  args: {
    variant: "contained",
    color: "success",
  },
  render: ({label, onClick, ...args}) => <ButtonWithHooks {...args}/>,
};