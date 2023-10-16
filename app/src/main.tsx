import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Main } from './Components/Pages/Main/Main.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DetailPizza } from './Components/Pages/DetailPizza/DetailPizza.tsx'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import FormAddPizzas from './Components/Pages/FormAddPizzas/FormAddPizzas.tsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: 'menu',
          element: <FormAddPizzas />
        },
        {
          path: 'menu/:detailPizzaId',
          element: <DetailPizza />
        }
      ],
    },
  ],
  // { basename: '/DogShopReact/' },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
