import { useState } from "react"
import { CartContext } from "./cartContext"

export const CartProvider = ({children}) => {

    const [cartState, setCartState] = useState([]);

    const addProduct = (productToAdd) => {

        const findProduct = cartState.find(elem => elem.id === productToAdd.id);

        if(findProduct) {
            const newCart = cartState.map(product => product.id === productToAdd.id
                ? {...product, quantity: product.quantity + 1}
                : product);
            setCartState(newCart)
            return;
        }
        
        setCartState([...cartState, {...productToAdd, quantity: 1}]);
    }

    const removeProduct = (id) => {
        const newCart = cartState.filter(product => product.id !== id);
        console.log(id)
        setCartState(newCart);
    } 

    const cartTotalPrice = () => {
        if(cartState.length !== 0) return cartState.reduce((prev, current) => current.quantity * current.price + prev, 0);

        return null
    }

    const cartTotalItems = () => cartState.length;

    return (
        <CartContext.Provider value={{cartState, addProduct, removeProduct, cartTotalPrice, cartTotalItems}}>
            {children}
        </CartContext.Provider>
    )
}