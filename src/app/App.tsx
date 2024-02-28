








import { classNames } from 'shared/helpers/classNames/classNames'
import './styles/index.scss'
import { ThemeSwitcher } from 'feature/ThemeSwitcher'
import { AppRouter } from './providers/Router/ui/AppRouter'
import { Link } from 'react-router-dom'
import { Navbar } from 'widgets/Navbar'
import { LanguageSwitcher } from 'feature/LanguageSwitcher'
import { Suspense } from 'react'

export const App = () => {

    return <div className={classNames('app')}>
        <Suspense fallback=''>
            <Navbar />
            <LanguageSwitcher />
            <ThemeSwitcher />
            <AppRouter />
        </Suspense>

    </div>
}

