import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {

    const storageKeyName = 'cart-storage';

    const getCartStorage = localStorage.getItem(storageKeyName);

    console.log(getCartStorage, 'getCartStorage');

    if(!getCartStorage) {
        localStorage.setItem(storageKeyName, '[]');
    }

    // const cartValue = getCartStorage !== 'undefined' ? JSON.parse(getCartStorage) : [];
    const cartValue = getCartStorage !== null ? JSON.parse(getCartStorage) : [];

    const [cartState, setCartState] = useState(cartValue);
    
    const addProduct = (productToAdd, howMany) => {

        const quantityToAdd = Number(howMany)
        const findProduct = cartState.find(elem => elem.id === productToAdd.id);

        if(findProduct) {
            const newCart = cartState.map(product => product.id === productToAdd.id
                ? {...product, quantity: product.quantity + quantityToAdd}
                : product);
            setCartState(newCart)
            localStorage.setItem(storageKeyName, JSON.stringify(newCart));
            return;
        }
        
        setCartState([...cartState, {...productToAdd, quantity: quantityToAdd}]);
        localStorage.setItem(storageKeyName, JSON.stringify([...cartState, {...productToAdd, quantity: quantityToAdd}]));
    }

    const removeProduct = (id) => {
        const newCart = cartState.filter(product => product.id !== id);
        localStorage.setItem(storageKeyName, JSON.stringify(newCart));
        setCartState(newCart);
    } 

    const cartTotalPrice = () => {
        if(cartState.length !== 0) return cartState.reduce((prev, current) => current.quantity * current.price + prev, 0);

        return null
    }

    const cartTotalItems = () => cartState.length;

    const clearCart = () => {
        localStorage.setItem(storageKeyName, '[]')
        setCartState([])
    }

    return (
        <CartContext.Provider value={{cartState, addProduct, removeProduct, cartTotalPrice, cartTotalItems, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}