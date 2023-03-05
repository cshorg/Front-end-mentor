import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './context/ThemeContext'
import { MainContextProvider } from './context/MainContext'
import './sass/app.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
