import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './stylesMain.css'
import { MainRoutes } from './routes/MainRoutes.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <MainRoutes />
)
