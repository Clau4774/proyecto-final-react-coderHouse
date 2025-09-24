export const bringAllProductsList =() => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            const data = await fetch('/data/productos.json');  
            if(!data) reject('Hubo un error al intentar traer la información') 
            const dataJson = await data.json()
            resolve(dataJson)

        },1500)
    })
}

export const getOneProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            const data = await fetch('/data/productos.json');   
            if(!data) reject('Se produjo un error al solicitar la información')
            const dataJson = await data.json();
            const product = dataJson.find(product => product.id === Number(id));
            resolve(product)
        },1500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            const data = await fetch('/data/productos.json');   
            if(!data) reject('Se produjo un error al solicitar la información')
            const dataJson = await data.json();
            const filteredProducts = dataJson.filter(product => product.category === category);
            resolve(filteredProducts)
        },1500)
    })
}