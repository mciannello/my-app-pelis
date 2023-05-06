import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="p-3 text-bg-dark">
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <h2 className="navbar-brand">MCI</h2>
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
                </ul>
            </nav>
        </header>
    )
}
export default Header;