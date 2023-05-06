// Librerias
import { Routes, Route } from "react-router-dom";

// Componentes
import Contacto from './components/Contacto';
import Listado from "./components/Listado";
import Login from './components/Login';
import Header from "./components/Header";
import Footer from "./components/Footer";
// Estilos
import './css/bootstrap.min.css'
import './css/App.css'



function App  () {

  return (
  <div className="container mt-3">
    <Header />
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="listado"  element={ <Listado /> }/>
      <Route path="contacto"  element={ <Contacto /> }/>
    </Routes>
    <Footer/>
    </div>
  
    
  )
}

export default App
