export const AddRemoveController = ({setProductQuantity, product, productQuantity, addProduct}) => {


    const sumProductQuantity = () =>  (product.stock > productQuantity) ? setProductQuantity(productQuantity + 1) : productQuantity;
    const reduceProductQuantity = () => (productQuantity === 1) ? productQuantity : setProductQuantity(productQuantity - 1);
    const addProductToCart = () => {
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