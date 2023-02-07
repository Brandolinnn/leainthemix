
import './App.css';
import Navbar from './components/interfaz/Navbar';
import Body from './components/interfaz/Body';
import Historia from "./components/interfaz/historia"
import Escucha from './components/interfaz/escucha';
import Footer from './components/interfaz/footer';
import Cursos from "./components/interfaz/cursos"
import ProductosLista from "./components/productos/index"
import Contenedor from './components/interfaz/Contenedor';
import Fotos from "./components/interfaz/Fotos"
import Redes from "./components/interfaz/Redes"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavScrollExample from '../src/components/interfaz/Navbarr';



function App() {
  return (
    < >


      <BrowserRouter >
      < NavScrollExample />

        

        <Routes>

          <Route path='/' element={<Contenedor />} />
          <Route path='/productos' element={< ProductosLista />} />
          <Route path='/cursos' element={< Cursos />} />


          

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
