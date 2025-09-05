import { CartWidget } from "./CartWidget"
import './NavBar.css'
import { NavBarCategories } from "./NavBarCategories"
import { SearchNavBar } from "./SearchNavBar"

export const NavBar = () => {
    
    return (
    <>
        <header id="header-container">
            <a href="#">
               <p>Logo</p>
            </a>
            <SearchNavBar />
            <CartWidget />
            <NavBarCategories />
        </header>
    </>
    )
}