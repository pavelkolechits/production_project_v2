import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'


const meta = {
    title: 'shared/AppLink',
    component: AppLink
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'link',
        to: '/'
    },
}