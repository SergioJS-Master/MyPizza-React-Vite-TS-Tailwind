import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { FC } from 'react'
// import Pizza from './models/Pizza'


const App: FC = () => {
  // const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  // const addPizza = (newPizza: Pizza) => {
  //   setPizzasList([...pizzasList, newPizza])
  // }

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
