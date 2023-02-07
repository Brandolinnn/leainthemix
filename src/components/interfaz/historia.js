import React from 'react'
import fotoLean from "../../assets/fotoLean.png"
const historia = () => {
    return (
        <>
            <div className='foto-parrafo'>
                <div>
                    <img src={fotoLean} className="foto-historia" alt="fotoLean" />
                </div>
                <div>
                    <h2 className='historia-titulo'>COMO SE CREO "LEA IN THE MIX"</h2>
                    <p className='parrafo'> Año 2012, comienzo a crear mis primeros remixes de reggaetón versión cumbia con el programa ACID Pro que me permitía mezclar sonidos, voces, efectos, subiendo mi música a la plataforma SoundCloud con el nombre "Lea In The Mix". <br></br>
                        Este nombre nace hablando con un colega. Hago mi primer álbum llamado "Lea In The Mix - Vol. 1", con 19 canciones bolicheras bailables, dándome a conocer en el ambiente de los DJs. </p>
                </div>
            </div>

        </>
    )
}

export default historia