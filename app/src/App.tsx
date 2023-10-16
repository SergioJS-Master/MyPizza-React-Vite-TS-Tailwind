import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { FC } from 'react'


const App: FC = () => {


  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
