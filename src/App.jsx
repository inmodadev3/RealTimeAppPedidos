import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { socket } from './utils/socket'
import { Pedidos } from './components/BodyPedidos/Pedidos'
import useSound from 'use-sound'
import notify from '../assets/sonidos/notify.mp3'

function App() {
  const [isConnected, setisConnected] = useState(false)
  const [dataPedidos, setdataPedidos] = useState([])
  const [dataPedidosEnviados, setdataPedidosEnviados] = useState([])
  const [notificacion] = useSound(notify)


  useEffect(() => {  
    ObtenerPedidos()
    socket.on('connect',notificacion)
    socket.on('pedidos',(data)=>{
      setdataPedidos([])
      setdataPedidos(data.data.pedidos)
      setdataPedidosEnviados(data.data.pedidosEnviados)
    })

    return ()=>{
      socket.off('connect');
      socket.off('pedidos')
    }
  }, [])

  useEffect(()=>{
    notificacion()
  },[dataPedidos])

  const ObtenerPedidos = () =>{
    socket.emit('obtenerDatos')
  }

  dataPedidos.sort((a,b)=>a.intEstado - b.intEstado)

  const ObtenerDatosPedidos = () =>{
    /* socket.emit('obtenerDetallesPedidos',{
      id:113 
    }) */
  }

  console.log(dataPedidosEnviados)
  

  return (
    <div>
      <Header/>
      <h1 style={{textAlign:'center'}}>PEDIDOS EN PROCESO</h1>
      {/* <button onClick={ObtenerPedidos}>Crear Pedido</button>
      <button onClick={ObtenerDatosPedidos}>añadir Producto</button> */}
      <div>
        {
          dataPedidos.length > 0 &&(
            <Pedidos pedidos={dataPedidos} color={"#92c020"} estado ={1}/>
          )
        }
        {
          dataPedidosEnviados.length > 0 &&(
            <Pedidos pedidos={dataPedidosEnviados} color={"#5f9fc8"} estado={2}/>
          )
        }
      </div>
      
    </div>
  )
}

export default App
