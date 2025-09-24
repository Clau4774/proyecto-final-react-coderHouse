import { Link } from "react-router"
import { Button } from "./Button"
import './ProductCard.css'

export const ProductCard = ({ id, title, category, price, img}) => {


    return (
        <div className="product-card-container">
            <h3>{title}</h3>
            <img src={img} alt={`Foto de ${title}`}/>
            <p>Precio ${price.toFixed(2)}</p>
            <Link exact='true' to={`/category/${category}/product/${id}`}>
                detalle
            </Link>
        </div>
    )
}