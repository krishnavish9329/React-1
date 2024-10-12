import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './contaxt/UserContext.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>

    <UserContext>
    <App />
    </UserContext>
    
    </BrowserRouter>
)
