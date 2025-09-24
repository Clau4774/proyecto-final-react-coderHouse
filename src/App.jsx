import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'
import { PageNotFound } from './components/PageNotFound'
import { ItemDetail } from './components/ItemDetail'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
          <main>
        <Routes>
            <Route path='/'  element={<ItemListContainer title='Bienvenido a la tienda de bebidas que estabas esperando'/>}/>
            <Route path='category/:productCategory' element={<ItemListContainer title={`Listado de productos filtrados: `}/>}/>
            <Route path='category/:productCategory/product/:productId' element={<ItemDetail />}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
          </main>
      </BrowserRouter>
    </>
  )
}

export default App
