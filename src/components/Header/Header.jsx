import React from 'react'
import './StylesHeader.css'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigation = useNavigate()
  return (
    <nav className='header_Container'>
        <img src={'http://10.10.10.128/ownCloud/fotos_nube/INMODA.png'} alt='Logo de la empresa IN MODA FANTASY' onClick={()=>{navigation('/')}}/>
    </nav>
  )
}
