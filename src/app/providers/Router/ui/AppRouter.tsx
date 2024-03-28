import { Suspense } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'

export const AppRouter = () => {
    return <Routes>
        {
            Object.values(routeConfig)
                .map((props) =>
                    <Route
                        element={props.element}
                        path={props.path}
                        key={props.path}
                    />)
        }
    </Routes>

}
