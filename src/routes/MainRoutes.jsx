import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from '../App'
import { DetallesPedido } from '../views/DetallesPedidos/DetallesPedido'

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App}/>
        <Route path='/pedidos/proceso/:intIdPedido' Component={DetallesPedido}/>
      </Routes>
    </BrowserRouter>
  )
}
