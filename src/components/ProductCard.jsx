import { Link } from "react-router"
import './ProductCard.css'

export const ProductCard = ({ id, title, category, price, img}) => {


    return (
        <div className="product-card-container box-shadow">
            <h3>{title}</h3>
            <div className="product-card-image-container">
                <img src={img} alt={`Foto de ${title}`}/>
            </div>
            <p>Precio ${price.toFixed(2)}</p>
            <Link exact='true' className="button rounded box-shadow" to={`/category/${category}/product/${id}`}>
                detalle
            </Link>
        </div>
    )
}