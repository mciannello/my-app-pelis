import { Link } from "react-router-dom";
import Busqueda from "./Busqueda";

function Header({guardado}){
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">MCI</Link>
                    <div className="collpase navbar-collapse" id="navbarNav">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-item dark" >
                            <Link className="nav-link px-2 text-secondary" to="/">Home</Link>
                        </li>
                        <li className="nav-item dark">
                        <Link className="nav-link px-2 text-white" to="/listado">Listado</Link>
                        </li>
                        <li className="nav-item dark">
                        <Link className="nav-link px-2 text-white" to="/contacto">Contacto</Link>
                        </li>
                        <li className="nav-item dark">
                        <Link className="nav-link px-2 text-white" to="/favoritos">Favoritos❤️ </Link>
                        </li>
                        <li className="nav-item dark d-flex align-items-center">
                        <span className="text-info px-2 ">
                          {guardado.favorites.length>0&&  <>Pelis en favoritos: {guardado.favorites.length}</>}
                            </span> 
                        </li>
                        </ul>
                    </div>
                    <Busqueda/>
                </div>
            </nav>
        </header>
    )
}
export default Header;