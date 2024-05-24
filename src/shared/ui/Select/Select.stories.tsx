import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'



const meta = {
    title: 'shared/Select',
    component: Select
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        className: 'cls',
        label: 'options',
        options: [ {value: "1", content: '1 opt'}, 
        {value: "2 opt", content: '2 opt'},
        {value: "3 opt", content: '3 opt'},
        {value: "3 opt", content: '3 opt'}
    ],
        value: 'value',
        readonly: false
    },
}