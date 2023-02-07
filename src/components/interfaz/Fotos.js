import React from 'react'
import gale1 from "../../assets/gale1.jpg"
import gale9 from "../../assets/gale9.jpg"
import gale3 from "../../assets/gale3.jpg"
import gale4 from "../../assets/gale4.jpg"
import gale5 from "../../assets/gale5.jpg"
import gale6 from "../../assets/gale6.jpg"
import gale7 from "../../assets/gale7.jpg"
import gale8 from "../../assets/gale8.jpg"


const Fotos = () => {
  return (
    <div className='row'>
      <h2 className='titulo-fotos'>Galeria de fotos</h2>


      <div className='column'>
        <img src={gale1} className="gale1" alt="logo" />
        <img src={gale9} className="gale1" alt="logo" />
        <img src={gale3} className="gale1" alt="logo" />
        <img src={gale4} className="gale1" alt="logo" />
        <img src={gale5} className="gale1" alt="logo" />
        <img src={gale6} className="gale1" alt="logo" />
        <img src={gale7} className="gale1" alt="logo" />
        <img src={gale8} className="gale1" alt="logo" />




      </div>



    </div>
  )
}

export default Fotos