# Proyecto final coderHouse curso React.

## E-commerce simulando una tienda de bebidas

## ¿Cómo correr el proyecto?

- Primero clonar el proyecto:

```bash
git clone https://github.com/Clau4774/proyecto-final-react-coderHouse
```

- Segundo ir a la carpeta donde hayamos clonado el proyecto y ejecutar el siguiente comando:

```bash
npm install
```

- Tercero inicializamos el proyecto así:

```bash
npm run dev
```

## Funcionalidades del proyecto

Este es un breve resumen de lo que se puede realizar con esta simulación:

- Ver listado de productos, ya sea filtrando por categoría o mostrando todos los disponibles.

- Ir al detalle de cada producto.

- Seleccionar la cantidad que queremos agregar al carrito.

- Ver el detalle del carrito de compras y desde este ir al checkout. En esta sección podremos también eliminar los productos que no querramos agregar.

- Desde el checkout podremos finalizar la compra, lo cual debe vaciar el carrito de compras y darnos un identificador con el orden de esta, que será el id generado por firestore en el documento creado con la orden de compra y los datos del usuario que serán llenados en el formulario de esta sección. De no llenar el formulario no se podrá finalizar la compra.
