export const ItemFinishBuyDetail = ({title, quantity, price}) => {

    return (
        <li className="product box-shadow">
            <p className="product-detail__title">Producto: {title}</p>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price.toFixed(2)}</p>
            <p>Total: ${(price * quantity).toFixed(2)}</p>
        </li>
    )
}