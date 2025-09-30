import { useContext } from "react"
import { CartContext } from "../context/cartContext"

export const CartDetail = () => {

    const {cartState} = useContext(CartContext);

return(
    <section>
        {cartState[0]}
    </section>
)
}