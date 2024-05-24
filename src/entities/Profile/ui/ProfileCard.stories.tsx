import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'




const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard
} satisfies Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        className: 'cls',
        data:  {
            "lastname": "asf",
            "age": '30',
            "currency": Currency.EUR,
            "country": Country.Belarus,
            "city": "Moscow",
            "username": "ulbi tv",
            "avatar": "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
            "firstname": "byblik"
          }
            
        ,
        readonly: false
    },
}