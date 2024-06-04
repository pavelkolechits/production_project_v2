import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import React from 'react';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from 'shared/consts/router';
import { SidebarItemType } from '../types/sidebar';
import ArticlesIcon from 'shared/assets/icons/article.svg'

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
                {
                    path: getRouteArticles(),
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true
                }
            );
        }
        return SidebarItemsList;
    },
);