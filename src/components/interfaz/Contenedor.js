import React from 'react'
import Navbar from './Navbar'
import Historia from './historia'
import Body from "../interfaz/Body"
import Fotos from '../interfaz/Fotos'
import Escucha from './escucha'
import Redes from './Redes'
import Footer from './footer'
import NavScrollExample from './Navbarr'

const Contenedor = () => {
  return (
    <>
      
      <Body />
      <Historia />
      <Fotos />
      <Escucha />
      <Redes />
      <Footer />

    </>
  )
}

export default Contenedor