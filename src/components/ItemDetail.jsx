import { useEffect, useState } from "react"
import { getOneProductById } from "../utils/bringData"
import { useParams } from "react-router";

export const ItemDetail = () => {

    const {productId} = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const data = getOneProductById(productId);
        data.then(product => {
            setProduct(product);
            setLoading(false);
            console.log(product, 'product')
        }).catch(error => console.error(error))
    },[productId])

    if(loading) return (
        <section>
            <p>Cargando el contenido... ⌛</p>
        </section>
    )

    return (
        <section>
            <h2>{product.title}</h2>
            <img src={product.img} alt={`Foto de un ${product.title}`} />
            <p>{product.description}</p>
            <h3>Precio ${product.price}</h3>
            <p>Disponibles: {product.stock}</p>
        </section>
    )
}