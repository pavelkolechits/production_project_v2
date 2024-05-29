import { Suspense, useMemo } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

export const AppRouter = () => {

    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            if(route.authOnly && !isAuth) {
                return false
            } 
            return true
        })
    }, [isAuth])


    return (<Routes>
        {
            routes
                .map((props) =>
                    <Route
                        element={props.element}
                        path={props.path}
                        key={props.path}
                    />)
        }
    </Routes>)

}
