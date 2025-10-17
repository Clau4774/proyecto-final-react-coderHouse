import { Link } from 'react-router'
import shoppingCartIcon from '../assets/shopping-cart.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

    const {cartTotalItems} = useContext(CartContext);

    const cartTotal = cartTotalItems();

    return (
        <Link to='/cart'>
            <div id='cart-widget-container'>                
                <img src={shoppingCartIcon} alt="cart-icon"/>
                <span>{cartTotal}</span>                
            </div>
        </Link>
    )
}