import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ItemDetailCart } from "./ItemDetailCart";
import './CartDetail.css'

export const CartDetail = () => {

    const {cartState, cartTotalPrice} = useContext(CartContext);

    const total = cartTotalPrice();

    if(cartState.length === 0) return <section>
        <h3>Su carro está vació 🛒</h3>
    </section>


    return (
        <section>
            <h3>Total de la compra: ${total.toFixed(2)}</h3>
            <h2>Listado de productos seleccionados</h2>
            <div id="cart-detail-items-container">
                {cartState.map(elem => <ItemDetailCart key={elem.id} {...elem }/>)}
            </div>
        </section>
    )
}