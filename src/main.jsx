import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CategoryItemDetails from './components/CategoryItemDetails.jsx'
import FoodDetails from './components/FoodDetails.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App></App>
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
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
