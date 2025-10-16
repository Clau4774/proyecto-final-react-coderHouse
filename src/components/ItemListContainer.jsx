import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getAllProductsList, getProductsByCategory } from '../../firebase.js'
import { Link, useParams } from 'react-router';
import { ProductCard } from './ProductCard';

export const ItemListContainer = ({title}) => {

    const { productCategory } = useParams();

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        if(!productCategory) {
            const data = getAllProductsList();
            data
            .then(newData => {
                setProducts(newData)
                setLoading(false)
            })
            .catch(e => console.error(e))
        } else {
           const data = getProductsByCategory(productCategory)
            data.then(products => {
                setProducts(products)
                setLoading(false)
            })
        }
    },[productCategory]);
    
    if(loading) {
        return (
            <section id="item-list-container">
                <h2>
                    Cargando los productos... ⌛
                </h2>
            </section>
        )
    }

    if(products.length === 0) return (
        <section id="item-list-container">
            <h1>No se han encontrado productos</h1>
            <h2>Ha hecho una búsqueda inválida</h2>
            <Link to="/" className='button rounded box-shadow '>Volver al inicio</Link>
        </section>
    )

    return (
        <section id="item-list-container">
            {!productCategory ? <h1 id="item-list-title">{title}</h1> : <h1 id="item-list-title">{title} {productCategory}</h1>}
            
            <div id='items-list' className="box-shadow">
                {products.map(product => <ProductCard key={product.id} {...product}/>)}
            </div>
        </section>
    )
} 