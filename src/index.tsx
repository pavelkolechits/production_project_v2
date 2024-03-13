import ReactDOM, { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'

const container = document.getElementById('root')
if (!container) {
    throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение')
}
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>

)
