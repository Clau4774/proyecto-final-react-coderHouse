import { useContext, useEffect, useState } from "react"
import { getOneProductById } from "../../firebase";
import { useParams } from "react-router";
import './ItemDetailContainer.css'
import { CartContext } from "../context/CartContext";

export const ItemDetailContainer = () => {

    const {addProduct} = useContext(CartContext);

    const {productId} = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [productQuantity, setProductQuantity] = useState(1);

    const sumProductQuantity = () =>  (product.stock > productQuantity) ? setProductQuantity(productQuantity + 1) : productQuantity;
    const reduceProductQuantity = () => {
        if(productQuantity === 1) return productQuantity;
        setProductQuantity(productQuantity - 1);
    };

    useEffect(() => {
        const data = getOneProductById(productId);
        data.then(product => {
            setProduct(product);
            setLoading(false);
        }).catch(error => console.error(error))
    },[productId])

    if(loading) return (
        <section className="product-container">
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
                <p>Disponibles: {product.stock}</p>
                <p>Cantidad a agregar: {productQuantity}</p>
            </div>
            <div id="product-controllers-container">
                <button className="product-controller__button" onClick={reduceProductQuantity}>-</button>
                <button className="product-controller__button"  onClick={() => {
                    addProduct(product, productQuantity);
                    setProductQuantity(1);
                    }}>Agregar al carrito 🛒</button>
                <button className="product-controller__button"  onClick={sumProductQuantity}>+</button>
            </div>
        </section>
    )
}