import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'


const meta = {
    title: 'shared/Skeleton',
    component: Skeleton
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        width: '100px',
        height: '100px',
        borderRadius: '50%'
    },
}