import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: "Button"
  },
} satisfies Meta<typeof Button>;

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

