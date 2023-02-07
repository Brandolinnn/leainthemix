import React from 'react'
import Navbar from '../interfaz/Navbar'
import personaje from "../../assets/personaje.png"


const ProductosLista = () => {
  return (
    <>




      <h1 className='titulo'>Productos</h1>
      <div className='productos'>
        <div className='producto'>

          <a href=''>
            <div className='producto_img'>
              <img src={personaje} className="personaje" alt="personaje" />
            </div>
          </a>
          <div className='producto_footer'>
            <h1>Titulo</h1>
            <p>Categoria</p>
            <p className='precio'>5000</p>
          </div>

          <div className='buttom'>
            <button className='btn' >Agregar al carrito</button>
            <div >
              <a className='btn' href='' >Ver mas</a>
            </div>
          </div>
        </div>

        <div className='producto'>

          <a href=''>
            <div className='producto_img'>
              <img src={personaje} className="personaje" alt="personaje" />
            </div>
          </a>
          <div className='producto_footer'>
            <h1>Titulo</h1>
            <p>Categoria</p>
            <p className='precio'>5000</p>
          </div>

          <div className='buttom'>
            <button className='btn' >Agregar al carrito</button>
            <div >
              <a className='btn' href='' >Ver mas</a>
            </div>
          </div>
        </div>

        <div className='producto'>

          <a href=''>
            <div className='producto_img'>
              <img src={personaje} className="personaje" alt="personaje" />
            </div>
          </a>
          <div className='producto_footer'>
            <h1>Titulo</h1>
            <p>Categoria</p>
            <p className='precio'>5000</p>
          </div>

          <div className='buttom'>
            <button className='btn' >Agregar al carrito</button>
            <div >
              <a className='btn' href='' >Ver mas</a>
            </div>
          </div>
        </div>




      </div>

    </>
  )
}

export default ProductosLista;