
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink ,Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import correo from "../../assets/correo.png"
import wsp from "../../assets/wsp.png"





function NavScrollExample() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} href="#"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/cursos">Cursos</Nav.Link>
                            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                        </Nav>
                        <Nav className="d-flex">
                            <div >
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=01126720095&text&type=phone_number&app_absent=0" ><img src={wsp} className="correo-wsp " alt="logo" /></a>
                            </div>
                            <div >
                                <a target="_blank" href="Leainthemix.c@hotmail.com" ><img src={correo} className="correo " alt="logo" /></a>
                            </div>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

     






        </>


    );
}

export default NavScrollExample;