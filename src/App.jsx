import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer title='Bienvenido a la tienda N°1'/>
      </main>
    </>
  )
}

export default App
