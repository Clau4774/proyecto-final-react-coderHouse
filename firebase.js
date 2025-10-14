// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, where, query, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getAllProductsList = async () => {
  
  try {
    const collectionRef =  collection(db, 'productos');
    const collectionResult = await getDocs(collectionRef);
    
    const products = collectionResult.docs.map(product => {
      return {
        id: product.id,
        ...product.data(),
        timeStamp: new Date()
      }
    });
    return products;

  } catch (e) {
    throw new Error('Se produjo un error al cargar los datos...', e);
  }

}

export const getProductsByCategory = async (categoryParam) => {
  
  try {

    const collectionRef = collection(db, 'productos')
    const q = query(collectionRef, where('category', '==', categoryParam));
    const queryResult = await getDocs(q);

    const filteredProducts = queryResult.docs.map(product => {
      return {
      id: product.id,
      ...product.data()
    }
  })
  return filteredProducts;

  } catch(e) {
    throw new Error('No se encotró categoría', e)
  }
}

export const getOneProductById = async (param) => {

  try {
    const docRef = doc(db, 'productos', param);
    const docResult = await getDoc(docRef);
    return {id: docResult.id, ...docResult.data()}
  } catch(e) {
    throw new Error('No se encontró el documento solicitado', e)
  }
}

export const finishOrder = async (buyerAndOrder) => {
  try {
    const collectionRef = collection(db, 'orders');
    const sendBuy = await addDoc(collectionRef, buyerAndOrder);
    return sendBuy.id
  } catch(e) {
    throw new Error('Se produjo un error al finalizar la compra', e)
  }
}