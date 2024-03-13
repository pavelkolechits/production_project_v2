import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: 'clear',
        square: false,
        size: 'size_m',
        disabled: false,
        children: 'button'
    },
}

export const OutlineSuccess: Story = {
    args: {
        theme: 'outline_success',
        square: false,
        size: 'size_l',
        disabled: false,
        children: 'button'
    },
    parameters: {
    },
}
export const Outline: Story = {
    args: {
        theme: 'outline',
        square: false,
        size: 'size_m',
        disabled: false,
        children: 'button'
    },
    parameters: {
    },
}
