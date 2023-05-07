// Librerias
import { Routes, Route } from "react-router-dom";

// Componentes
import Contacto from './components/Contacto';
import Listado from './components/Listado';
import Login from './components/Login';
import Detalle from './components/Detalle';
import Header from './components/Header';
import Footer from './components/Footer';
// Estilos
import './css/bootstrap.min.css'
import './css/App.css'



function App  () {

  return (
  <div className="container-fluid">
    <Header />
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="listado"  element={ <Listado /> }/>
      <Route path="contacto"  element={ <Contacto /> }/>
      <Route path="detalle"  element={ <Detalle /> }/>
    </Routes>
    <Footer/>
    </div>
  
    
  )
}

export default App
