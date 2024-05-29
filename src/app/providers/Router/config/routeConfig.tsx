import { AboutePage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'
import { AppRoutes, getRouteAbout, getRouteMain, getRouteNotFound, getRouteProfile } from 'shared/consts/router'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

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
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND] : {
        path: getRouteNotFound(),
        element: <NotFoundPage />
    }

}
