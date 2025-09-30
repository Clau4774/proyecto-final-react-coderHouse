import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const ItemDetailCart = ({id, title, img, price, quantity}) => {

    const totalPrice = price * quantity;
    const {removeProduct} = useContext(CartContext);

    return (
        <div>
            <button onClick={() => removeProduct(id)}>Eliminar producto</button>
            <h3>{title}</h3>
            <img src={img} alt={`Foto de ${title}`}/>
            <p>Cantidad seleccionada: {quantity}</p>
            <p>Precio del producto: ${price.toFixed(2)}</p>
            <p>Subtotal por productos: ${totalPrice.toFixed(2)}</p>
        </div>
    )
}
