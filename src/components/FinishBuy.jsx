import { useContext, useRef, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router";
import { finishOrder } from "../../firebase";
import './FinishBuy.css'

export const FinishBuy = () => {

    const { cartState, cartTotalPrice, cartTotalItems, clearCart} = useContext(CartContext);

    const [finishOrderIdState, setFinishOrderIdState] = useState('');

    const cartPrice = cartTotalPrice();

    const cartItems = cartTotalItems();

    const formRef = useRef();
    
    const checkFormData = () => {

        const form = formRef.current;

        const nameValue = form.name.value;
        const telValue = form.tel.value;
        const emailValue = form.email.value;
        const directionValue = form.direction.value;

        if(!nameValue.trim()) return console.log('Falta completar el nombre');
        if(!telValue.trim()) return console.log('Falta completar el apellido');
        if(!emailValue.trim()) return console.log('Falta completar el email');
        if(!directionValue.trim()) return console.log('Falta completar la dirección');

        form.name.value = '';
        form.tel.value = '';
        form.email.value = '';
        form.direction.value = '';

        return {
            name: nameValue,
            tel: telValue,
            email: emailValue,
            direction: directionValue
        }

    }

    const sentBuy = async event => {
        event.preventDefault();
        const userInfo = checkFormData();
        const buyer = {
            buyer: {userInfo, date: new Date()},
            order: {...cartState, cartTotal: cartPrice}
        }
        const orderSent = await finishOrder(buyer);
        clearCart();
        setFinishOrderIdState(orderSent);
    }

    if(finishOrderIdState) return (
        <section>
            <h2>Su compra a sido procesada con éxito, este es su identificador de compra: {finishOrderIdState}</h2>
            <Link to="/">Ir al inicio</Link>
        </section>
    )


    if(!cartItems) {
        return (
            <section>
                <h2>Aún no tiene productos cargados, aquí puede volver a la tienda</h2>
                <Link to="/">Ir al inicio</Link>
            </section>
        )
    }

    return (
        <section>
            <h2>Resumen de su compra</h2>
            <ul id="product-detail__container" className="box-shadow">
                {cartState.map(product => (
                    <li className="product box-shadow" key={product.id}>
                        <p className="product-detail__title">Producto: {product.title}</p>
                        <p>cantidad: {product.quantity}.</p>
                        <p>precio: ${product.price.toFixed(2)}</p>
                        <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
                    </li>
                ))}
            </ul>
            <h2>Valor total de la compra</h2>
            <h3>Total: ${cartPrice.toFixed(2)}</h3>
            <h2>Complete el formulario para finalizar la compra</h2>
            <form action="#" id="form__container" onSubmit={(e) => sentBuy(e)} className="box-shadow" ref={formRef}>
                <label htmlFor="name">Indique su nombre</label>
                <input id="name" name="name" type="text" required placeholder="Indique su nombre..." />
                <label htmlFor="tel">Indique su teléfono de contacto</label>
                <input id="tel" name="tel" type="number" required placeholder="Indique su teléfono..." />
                <label htmlFor="email">Indique su email</label>
                <input id="email" name="email"  type="email" required placeholder="Indique su email..." />
                <label htmlFor="direction">Indique su dirección</label>
                <input id="direction" name="direction" type="text" required placeholder="Indique su dirección..." />
                <button className="box-shadow" >Finalizar compra</button>
            </form>
        </section>
    )
}