import { Link } from 'react-router'
import shoppingCartIcon from '../assets/shopping-cart.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export const CartWidget = () => {

    const {cartTotalItems} = useContext(CartContext);

    return (
        <div id='cart-widget-container'>
            <Link to='/cart'>
            <img src={shoppingCartIcon} alt="cart-icon"/>
            <span>{cartTotalItems()}</span>
            </Link>
        </div>
    )
}