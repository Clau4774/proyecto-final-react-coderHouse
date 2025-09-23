import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <BrowserRouter>
          <main>
        <Routes>
            <Route path='/'  element={<ItemListContainer title='Bienvenido a la tienda de bebidas que estabas esperando'/>}/>
            
        </Routes>
          </main>
      </BrowserRouter>
    </>
  )
}

export default App
