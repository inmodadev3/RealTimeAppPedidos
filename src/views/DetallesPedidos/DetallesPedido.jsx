import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { socket } from '../../utils/socket'
import { CardDetallesPedidos } from '../../components/CardDetallesPedidos/CardDetallesPedidos'
import useSound from 'use-sound'
import noti from '../../../assets/sonidos/notify.mp3'

export const DetallesPedido = () => {
    const {intIdPedido} = useParams()

    const [arrayDetalleProductos, setarrayDetalleProductos] = useState([])
    const [notify] = useSound(noti)
    
    

    useEffect(()=>{
        obtenerDetallesPedido()
        socket.on('detallesPedido',(data)=>{
            
            if(data.id == intIdPedido){
                setarrayDetalleProductos(data.data)
                notify()
            }
            
        })

        return ()=>{
            socket.off('detallesPedido')
            socket.off("cambiarEstadoProducto")
        }
    },[])

    const obtenerDetallesPedido = () =>{
        socket.emit('obtenerDetallesPedidos',{
            id:intIdPedido
        })
    }

    return (
        <div>
            <Header />
            <div>
                {
                    arrayDetalleProductos.length > 0 &&(
                        <CardDetallesPedidos productos={arrayDetalleProductos} idPedido = {intIdPedido}/>
                    )
                }
            </div>
        </div>
    )
}
