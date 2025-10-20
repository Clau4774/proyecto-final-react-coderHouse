export const AddRemoveController = ({setProductQuantity, product, productQuantity, productInCart, addProduct}) => {

    const sumProductQuantity = () =>  ((product.stock - productInCart) > productQuantity) ? setProductQuantity(productQuantity + 1) : productQuantity;

    const reduceProductQuantity = () => (productQuantity === 1) ? productQuantity : setProductQuantity(productQuantity - 1);
    
    const addProductToCart = () => {
        if((product.stock - productInCart) === 0) return
        addProduct(product, productQuantity);
        setProductQuantity(1);
    }

    return (
        <div id="product-controllers-container">
                <button className="product-controller__button" onClick={reduceProductQuantity}>-</button>
                <button className="product-controller__button" onClick={addProductToCart}>Agregar al carrito 🛒</button>
                <button className="product-controller__button" onClick={sumProductQuantity}>+</button>
            </div>
    )
}