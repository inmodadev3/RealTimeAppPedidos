import React from 'react'
import { CardProductos } from './CardProductos'
import './stylesCardProductos.css'

export const CardDetallesPedidos = ({productos,idPedido}) => {
  return (
    <div className='productos_grid'>
        {
          productos.map((producto)=>(
            <CardProductos producto={producto} key={producto.intIdPedDetalle} idPedido={idPedido}/>
          ))
        }
    </div>
  )
}
