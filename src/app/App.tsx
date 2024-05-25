import { classNames } from 'shared/helpers/classNames/classNames'
import './styles/index.scss'
import { AppRouter } from './providers/Router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Suspense, useEffect } from 'react'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { userActions } from 'entities/User'

export const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return <div className={classNames('app')}>
        <Suspense fallback=''>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
}
