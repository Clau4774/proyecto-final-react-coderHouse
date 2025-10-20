import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './ItemDetailCart.css'
import { Link } from "react-router";

export const ItemDetailCart = ({id, title, img, price, quantity, category}) => {

    const totalPrice = price * quantity;
    const {removeProduct} = useContext(CartContext);

    return (
        <div className="item-detail-cart__container box-shadow rounded">
            <button className="item-detail-cart__button box-shadow"  onClick={() => removeProduct(id)}>
                Eliminar producto
            </button>
            <h3>{title}</h3>
            <img src={img} alt={`Foto de ${title}`}/>
            <div className="item-detail-cart__description-container">
                <p><span>Cantidad seleccionada</span>: {quantity}</p>
                <p><span>Precio del producto</span>: ${price.toFixed(2)}</p>
                <p><span>Total por productos</span>: ${totalPrice.toFixed(2)}</p>
            </div>
            <Link to={`/category/${category}/product/${id}`} className="button box-shadow rounded">Volver al producto</Link>
        </div>
    )
}
