
import "../css/Navbar.css"
import { NavLink } from "react-router-dom"
import CartWidgetRI from "./CartWidgetRI"


const Navbar = () => {
    return (
        <nav className="nav-container">
            <NavLink className="logo-link" to="/">
                <img src="../logo1.png" alt="Logo" className="logo-img" />
            </NavLink>
            <NavLink className="a-nav" to="/category/Nuevo">Nuevos</NavLink>
            <NavLink className="a-nav" to="/category/Ofertas">Ofertas</NavLink>
            <NavLink className="a-nav" to="/category/Mas Vendidos">Mas vendidos</NavLink>
            <CartWidgetRI />
        </nav>
    )
}
export default Navbar 