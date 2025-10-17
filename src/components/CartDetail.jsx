import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ItemDetailCart } from "./ItemDetailCart";
import './CartDetail.css'
import { Link } from "react-router";

export const CartDetail = () => {

    const {cartState, cartTotalPrice, clearCart} = useContext(CartContext);

    const total = cartTotalPrice();

    if(cartState.length === 0) return (
    <section>
        <h3 id="empty-cart-title">Su carro está vació 🛒</h3>
        <Link className="button box-shadow rounded" to={'/'}>Volver al inicio</Link>
    </section>
    )


    return (
        <section id="cart-detail__container">
            <h1>Listado de productos seleccionados</h1>
            <h2>Total de la compra: ${total.toFixed(2)}</h2>
            <div id="cart-detail-items-container" className="box-shadow rounded">
                {cartState.map(elem => <ItemDetailCart key={elem.id} {...elem }/>)}
            </div>
            <div className="cart-link-and-button-container">
                <Link className="button box-shadow rounded" to='/finish-buy'>Finalizar compra</Link>
                <button className="button box-shadow rounded" onClick={clearCart}>Vaciar carro de compras</button>
            </div>
        </section>
    )
}