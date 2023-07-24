import React from 'react'
import { CardPedidos } from '../CardPedidos/CardPedidos'
import './StylePedidos.css'

export const Pedidos = ({pedidos,color, estado}) => {
  return (
    <div className="ContainerPrincipalPedidos">
        {
            pedidos.map((pedido,index)=>(
                <CardPedidos pedido={pedido} key={pedido.intIdPedido} color={color} estado={estado}/>
            ))
        }
    </div>
  )
}
