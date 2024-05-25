import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import React from 'react';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import {
    getRouteAbout, getRouteMain, getRouteProfile,
} from 'shared/consts/router';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];
        if (userData) {
            SidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
            );
        }
        return SidebarItemsList;
    },
);