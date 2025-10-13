import "../components/css/NavBar.css"
import CartWidget from "./CartWidget"

const Navbar = ()=> {
     return(
       <nav className="nav-container">
    <a className="logo-link" href="/"> 
        <img src="../public/logo1.png" alt="Logo" className="logo-img" />
    </a>
    <a className="a-nav" href="">Nuevos</a>
    <a className="a-nav" href="">Ofertas</a>
    <a className="a-nav" href="">Mas vendidos</a>
    <CartWidget/>
</nav>
     )
}
export default Navbar 