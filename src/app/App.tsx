








import { classNames } from 'shared/helpers/classNames/classNames'
import './styles/index.scss'
import { ThemeSwitcher } from 'feature/ThemeSwitcher'
import { AppRouter } from './providers/Router/ui/AppRouter'
import { Link } from 'react-router-dom'
import { Navbar } from 'widgets/Navbar'

export const App = () => {
    
    return <div className={classNames('app')}>
        <Navbar/>
        <ThemeSwitcher />
        <AppRouter/>
           </div>
}

