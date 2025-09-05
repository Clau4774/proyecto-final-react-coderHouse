import shoppingCartIcon from '../assets/shopping-cart.png'
import './CartWidget.css'

export const CartWidget = () => {

    return (
        <div id='cart-widget-container'>
            <img src={shoppingCartIcon} alt="cart-icon"/>
            <span>0</span>
        </div>
    )
}