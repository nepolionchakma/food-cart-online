import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CategoryItemDetails from './components/CategoryItemDetails.jsx'
import FoodDetails from './components/FoodDetails.jsx'
import FoodCategory2 from './components/FoodCategory2.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App></App>,
      errorElement: <Error></Error>
      // children: [
      //   {
      //     path: "/Login",
      //     element: <Login></Login>
      //   }
      // ]
    },
    {
      // path: '',
      // element: <Login></Login>,
    },
    {
      path: '/details/:strCategory',
      loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`),
      element: <CategoryItemDetails></CategoryItemDetails>
    },
    {
      path: '/details/food/:idMeal',
      loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
      element: <FoodDetails></FoodDetails>
    },
    {
      path: '/details/foodIngredient/:strIngredient',
      loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=${params.strIngredient}`),
      element: <FoodCategory2></FoodCategory2>
    },
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
