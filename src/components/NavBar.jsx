import './NavBar.css'
import { CartWidget } from "./CartWidget"
import { NavBarCategories } from "./NavBarCategories"
import { Link } from 'react-router'

export const NavBar = () => {
    
    return (
    <>
        <header id="header-container">
            <Link id="header-main-title" to="/">
               <h2>Beber con elegancia</h2>
            </Link>
            <CartWidget />    
            <NavBarCategories />
        </header>
        
    </>
    )
}