import { useContext, useEffect, useState } from "react"
import { getOneProductById } from "../../firebase";
import { useParams } from "react-router";
import './ItemDetailContainer.css'
import { CartContext } from "../context/CartContext";
import { AddRemoveController } from "./AddRemoveController";

export const ItemDetailContainer = () => {

    const {addProduct, cartState} = useContext(CartContext);

    const {productId} = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [productInCart, setProductInCart] = useState(undefined);
    const [productQuantity, setProductQuantity] = useState(1);
    

    useEffect(() => {
        const data = getOneProductById(productId);
        data.then(product => {
            setProduct(product);
            const findProductInCart = cartState.find(elem => elem.id === product.id);
            findProductInCart ? setProductInCart(findProductInCart.quantity) : setProductInCart(0);
            setLoading(false);
        }).catch(error => console.error(error))
    },[productId, cartState])

    const controllerInfo = {
        addProduct,
        product,
        setProduct,
        setProductQuantity,
        productQuantity,
        productInCart
    }

    const compareStockAndCartQuantity = product?.stock - productInCart;

    console.log('compareStockAndCartQuantity', compareStockAndCartQuantity)

    if(loading) return (
        <section id="product-container">
            <h2>Cargando el contenido... ⌛</h2>
        </section>
    )

    return (
        <section id="product-container">
            <h2 id="product-title">Producto: <span style={{textDecoration: 'underline'}}>{product.title}</span></h2>
            <div id="product-image-container-and-description" className="box-shadow rounded">
                <div id="product-image-container">
                    <img id="product-image" src={product.img} alt={`Foto de un ${product.title}`} />
                </div>
                <div id="product-description-container">
                    <p>{product.description}</p>
                </div>
            </div>
            <div id="product-price-stock-quantity-container">
                <h3>Precio ${product.price}</h3>
                {compareStockAndCartQuantity === 0
                ? <p>Disponibles: Sin disponibilidad.</p>
                : <p>Disponibles: {compareStockAndCartQuantity}</p>
            }
                <p>Cantidad a agregar: {compareStockAndCartQuantity > 0 ? productQuantity : 'Sin disponibilidad'}</p>
            </div>
            {compareStockAndCartQuantity > 0
            ? <AddRemoveController {...controllerInfo}/>
            : <p style={{
                margin: "1rem 0",
                fontWeight: 600,
                color: 'red'
            }}>Producto no disponible</p>}
        </section>
    )
}