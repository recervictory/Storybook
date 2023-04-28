import type { Meta, StoryObj } from '@storybook/react';

import { StatCard } from '../components/StatCard';

const meta = {
    title : 'StatCrad',
    component: StatCard,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
      },
} satisfies Meta<typeof StatCard>

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryStatCard: Story = {
    args: {
        header: "Header",
        label: "Parimary Card",
        labelColor: "primary",
        sublabel: "Sub-Heading of StatCard",
        sublabelColor: 'primary',
        backgroundColor: "#FFD966"
    }
}

export const SecondayStatCard: Story = {
    args: {
        header: "Header",
        label: "Secondary Card",
        labelColor: "secondary",
        sublabel: "Sub-Heading of StatCard",
        sublabelColor: 'secondary',
        backgroundColor: "#6096B4"
    }
} 