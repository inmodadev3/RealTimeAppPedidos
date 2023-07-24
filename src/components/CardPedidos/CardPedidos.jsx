import React from 'react'
import './StylesCardsPedidos.css'
import moment from 'moment/moment'
import {useNavigate} from 'react-router-dom'


export const CardPedidos = ({pedido,color,estado}) => {
  const navigation = useNavigate()
  return (
    <div key={pedido.intIdPedido} className='pedidos_card'  onClick={()=>{
      if(estado === 1){
        navigation(`/pedidos/proceso/${pedido.intIdPedido}`)
      }else{
        navigation(`/pedidos/proceso/${pedido.strIdPedidoVendedor}`)
      }
    }}
    style={{backgroundColor:color, color:pedido.intEstado == 1 ? "#FFFFFF":"#FFFFFF"}}>
        <div>
            <p className='pedido_idPedido'>Pedido en terminal: <span>{pedido.intIdPedido}</span></p>
            <p>Fecha: {moment(pedido.dtFechaModificacion).format(`YYYY-MM-DD / hh:mm`)} </p>
            <p>Vendedor@: {pedido.strNombVendedor}</p>
            <p>Cliente: {pedido.strNombCliente}</p>
            {pedido.intEstado == 1 ?
            (
                <p style={{color:'#000000',textDecoration:'underline'}}>PEDIDO EN SALA</p>
            ):
            (
              <p style={{color:'#000000',textDecoration:'underline'}}>PEDIDO EN CARTERA</p>
            )
            }
        </div>
        <div>
            <p className='cant_items'>{pedido.detallesPedido.length}</p>
        </div>
    </div>
  )
}
