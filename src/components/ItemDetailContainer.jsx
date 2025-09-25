import { useEffect, useState } from "react"
import { getOneProductById } from "../utils/bringData"
import { useParams } from "react-router";
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const {productId} = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

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
        <section className="product-container">
            <h2 id="product-title">Producto: <span style={{textDecoration: 'underline'}}>{product.title}</span></h2>
            <div id="product-image-container-and-description" className="box-shadow rounded">
                <img id="product-image" src={product.img} alt={`Foto de un ${product.title}`} />
                <p>{product.description}</p>
            </div>
            <h3>Precio ${product.price}</h3>
            <p>Disponibles: {product.stock}</p>
        </section>
    )
}