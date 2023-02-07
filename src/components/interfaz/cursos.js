import React from 'react'
import Navbar from './Navbar'
import Body from './Body'

const cursos = () => {
    return (
        <>
            
            <Body />

            <div className='div-cursos'>
                <div className='bronce'>
                <h2 className='subtitulo'>$100 / BRONCE</h2>
                </div>

                <div className='plata'>
                <h2 className='subtitulo'>$200 / PLATA</h2>

                </div>

                <div className='oro'>
                <h2 className='subtitulo'>$300 / ORO</h2>

                </div>
            </div>


        </>
    )
}

export default cursos