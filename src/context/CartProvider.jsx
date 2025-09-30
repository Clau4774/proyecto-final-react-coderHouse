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


    return (
        <CartContext.Provider value={{cartState, addProduct}}>
            {children}
        </CartContext.Provider>
    )
}