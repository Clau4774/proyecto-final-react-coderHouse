import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { bringAllProductsList, getProductsByCategory } from '../utils/bringData'
import { useParams } from 'react-router';
import { ProductCard } from './ProductCard';

export const ItemListContainer = ({title}) => {

    const { productCategory } = useParams();

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        if(!productCategory) {
            const data = bringAllProductsList()
            data.then(newData => {
                console.log(newData, 'newData')
                setProducts(newData)
                setLoading(false)
            })
        } else {
            const data = getProductsByCategory(productCategory)
            data.then(products => {
                console.log(products, 'products')
                setProducts(products)
                setLoading(false)
            })
        }
    },[productCategory]);
    
    if(loading) {
        return (
            <h3>
                Cargando los productos... ⌛
            </h3>
        )
    }

    return (
        <section id="item-list-container">
            {!productCategory ? <h1 id="item-list-title">{title}</h1> : <h1 id="item-list-title">{title} {productCategory}</h1>}
            
            <div id='items-list'>
                {products.map(product => <ProductCard key={product.id} {...product}/>)}
            </div>
        </section>
    )
} 