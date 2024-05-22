import type { Meta, ReactRenderer, StoryContext, StoryFn, StoryObj } from '@storybook/react'
import { LoginModal } from './LoginModal'
import { createPortal } from 'react-dom'




const meta = {
    title: 'feature/LoginModal',
    component: LoginModal
} satisfies Meta<typeof LoginModal>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        isOpen: true
    },
}