import { CartWidget } from "./CartWidget"
import './NavBar.css'
import { NavBarCategories } from "./NavBarCategories"
import { SearchNavBar } from "./SearchNavBar"

export const NavBar = () => {
    
    return (
    <>
        <header id="header-container">
            <a id="header-main-title" href="#">
               <h2>Beber con elegancia</h2>
            </a>
            <SearchNavBar />
            <CartWidget />    
            <NavBarCategories />
        </header>
        
    </>
    )
}