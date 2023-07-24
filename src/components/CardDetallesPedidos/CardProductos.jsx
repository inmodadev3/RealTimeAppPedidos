import React, { useEffect } from 'react'
import './stylesCardProductos.css'
import { socket } from '../../utils/socket'

export const CardProductos = ({ producto,idPedido }) => {

    
    
    const cambiarEstadoDespache = (intIdPedDetalle, value) => {
        socket.emit("cambiarEstadoProducto",{
            intIdPedDetalle:intIdPedDetalle,
            valorDespache:value == true ? 1 : 0
        })

        socket.emit("obtenerDetallesPedidos",{
            id:idPedido
        })

    }

    return (
        <div className='productos_card' style={{backgroundColor:producto.boolDespachado == 0 ? "#62a2c9" : "#f08603"}}>
            <div className='productos_card_container'>
                <div className='imagen_Producto_card'>
                    <img src={`http://10.10.10.128/ownCloud/fotos_nube/FOTOS%20%20POR%20SECCION%20CON%20PRECIO/${producto.strRutaImg}`} />
                </div>
                <div>
                    <p>Ref: <span style={{ color: 'white' }}>{producto.strIdProducto}</span> </p>
                    <p style={{ color: 'white' }}>{producto.strDescripcion}</p>
                    {
                        producto.strColor.toString().trim() !== '' && (
                            <p>Color: <span style={{ color: 'white' }}>{producto.strColor}</span></p>
                        )
                    }
                    {
                        producto.strObservacion.toString().trim() !== '' && (
                            <p>observacion: <span style={{ color: 'white' }}>{producto.strObservacion}</span></p>
                        )
                    }
                    <p>Cantidad: <span style={{ color: 'white' }}>{producto.intCantidad} / {producto.strUnidadMedida}</span></p>
                    <p>Ubicacion: <span style={{ color: 'white' }}>{producto.ubicacion}</span></p>
                </div>
                <div className='checked'>
                    <input type='checkbox' checked={producto.boolDespachado == 0 ? false : true} onChange={(e)=>{cambiarEstadoDespache(producto.intIdPedDetalle,e.target.checked)}} />
                </div>
            </div>

        </div>
    )
}
