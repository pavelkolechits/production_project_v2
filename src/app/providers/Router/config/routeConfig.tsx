import { AboutePage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'
import { AppRoutes, getRouteAbout, getRouteMain, getRouteProfile } from 'shared/consts/router'

type AppRouteProps = RouteProps

export const routeConfig: Record<AppRoutes, AppRouteProps> = {

    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    },

    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutePage />
    },
    [AppRoutes.PROFILE] : {
        path: getRouteProfile(':id'),
        element: <ProfilePage />
    }

}
