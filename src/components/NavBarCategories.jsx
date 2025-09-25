import './NavBarCategories.css'
import { Link } from 'react-router'

export const NavBarCategories = () => {


    return (           
        <nav id="navbar-categories-container"> 
            <Link to="/" className="navbar-category-item">
                Inicio
            </Link>
            <Link to="category/destilados" className="navbar-category-item">
                Destilados
            </Link>
            <Link to="category/vinos-y-espumantes" className="navbar-category-item">
                Vinos y espumantes
            </Link>
            <Link to="category/cervezas" className="navbar-category-item">
                Cervezas
            </Link>
            <Link to="category/bebidas-sin-alcohol" className="navbar-category-item">
                Bebidas sin alcohol
            </Link>
        </nav>
    )
}