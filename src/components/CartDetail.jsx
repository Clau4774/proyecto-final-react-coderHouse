import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ItemDetailCart } from "./ItemDetailCart";
import './CartDetail.css'
import { Link } from "react-router";

export const CartDetail = () => {

    const {cartState, cartTotalPrice} = useContext(CartContext);

    const total = cartTotalPrice();

    if(cartState.length === 0) return <section>
        <h3>Su carro está vació 🛒</h3>
    </section>


    return (
        <section id="cart-detail__container">
            <h2>Listado de productos seleccionados</h2>
            <h2>Total de la compra: ${total.toFixed(2)}</h2>
            <div id="cart-detail-items-container">
                {cartState.map(elem => <ItemDetailCart key={elem.id} {...elem }/>)}
            </div>
            <Link className="button box-shadow rounded" to='/finish-buy'>Finalizar compra</Link>
        </section>
    )
}