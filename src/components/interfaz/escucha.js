import React from 'react'
import ReactPlayer from 'react-player'
import tema1 from "../../assets/fotoafter11.png"
import tema2 from "../../assets/fotoafter9.png"
import tema3 from "../../assets/fotoafter10.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const escucha = () => {

    useEffect = (() => {
        AOS.init({
            once:true,
            duration:500
        })
    })

    
    return (
        <>
            <div className='video-titulo'>
                <h2 className='escucha'>Escucha lo ultimo de Lea in the mix</h2>
                <ReactPlayer controls
                    width="1000px"
                

                    height="600px"
                    url="https://www.youtube.com/watch?v=wobsp7AxcH8&ab_channel=Leainthemix"
                />
            </div>

            <h4 className='podes-escuchar'>Podes escuchar tambien:</h4>

            <div  className='cards-yt'>
                <div className="card text-bg-dark " >
                    <img src={tema1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 classNmae="card-title">DANZA ALETEO - LEA IN THE MIX</h5>
                            <p className="card-text">Entra a escuchar "Danza aleteo" en Youtube</p>
                            <a href="https://www.youtube.com/watch?v=-LYtfgeor18" className="btn btn-danger" target="_blank">Ir a YOUTUBE</a>
                        </div>
                </div>
                <div className="card text-bg-dark" >
                    <img src={tema2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">PA QUE MUEVAS LAS CADERAS - LEA IN THE MIX</h5>
                            <p className="card-text">Entra a escuchar "Pa que muevas las caderas" en Youtube</p>
                            <a  href="https://www.youtube.com/watch?v=aNdjHkAYhNg" className="btn btn-danger" target="_blank">Ir a YOUTUBE</a>
                        </div>
                </div>
                <div className="card text-bg-dark" >
                    <img src={tema3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">ESTA VIDA ME ENCANTA (Remix) - LEA IN THE MIX</h5>
                            <p className="card-text">Entra a escuchar "Esta vida me encanta" en Youtube</p>
                            <a href="https://www.youtube.com/watch?v=6trMhErCSk4&ab_channel=Leainthemix" className="btn btn-danger" target="_blank">Ir a YOUTUBE</a>
                        </div>
                </div>



            </div>





        </>
    )
}

export default escucha