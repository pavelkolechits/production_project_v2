import { classNames } from 'shared/helpers/classNames/classNames'
import './styles/index.scss'
import { AppRouter } from './providers/Router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Suspense } from 'react'
import { Sidebar } from 'widgets/Sidebar/Sidebar'
import { Modal } from 'shared/ui/Modal/Modal'

export const App = () => {
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
