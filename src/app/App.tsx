








import { classNames } from 'shared/helpers/classNames/classNames'
import './styles/index.scss'

export const App = () => {
    console.log('render1')
    return <div className={classNames('app')}></div>
}