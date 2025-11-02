import "../components/css/Navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav-container">
            <NavLink className="logo-link" to="/">
                <img src="../logo1.png" alt="Logo" className="logo-img" />
            </NavLink>
            <NavLink className="a-nav" to="/category/Nuevo">Nuevos</NavLink>
            <NavLink className="a-nav" to="/category/Ofertas">Ofertas</NavLink>
            <NavLink className="a-nav" to="/category/Mas Vendidos">Mas vendidos</NavLink>
            <CartWidget />
        </nav>
    )
}
export default Navbar 