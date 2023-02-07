import React from 'react'
import logo from "../../assets/logo.png"
import correo from "../../assets/correo.png"
import wsp from "../../assets/wsp.png"
import { Link, BrowserRouter } from 'react-router-dom'


const Navbar = () => {
    return (
        <>



            <nav className="navbar navbar-expand-lg  ">
                <Link>
                    <img src={logo} className="App-logo" alt="logo" />

                </Link>



                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNmae="navbar-toggler-icon"></span>
                </button>




                <nav className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link as={Link}  className="nav-link " aria-current="page" to={"/"}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link as={Link} class="nav-link" aria-current="page" to={"/cursos"}>Cursos</Link>
                        </li>

                        <li class="nav-item">
                            <Link as= {Link} className="nav-link " aria-current="page" to={"/productos"}>
                                Productos
                            </Link>

                        </li>

                    </ul>
                </nav>

                <div className="d-flex">
                    <div >
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=01126720095&text&type=phone_number&app_absent=0" ><img src={wsp} className="correo-wsp " alt="logo" /></a>
                    </div>
                    <div >
                        <a target="_blank" href="Leainthemix.c@hotmail.com" ><img src={correo} className="correo " alt="logo" /></a>
                    </div>



                </div>

            </nav>


        </>
    )
}

export default Navbar