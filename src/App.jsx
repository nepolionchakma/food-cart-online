import { Outlet } from 'react-router-dom'
import './App.css'
import ABCD from './components/ABCD'
import Categories from './components/Categories'
import Country from './components/Country'
import FoodData from './components/FoodData'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Categories></Categories>
      <FoodData></FoodData>
      <Country></Country>
      <ABCD></ABCD>
      <Form></Form>
      <Footer></Footer>
    </>
  )
}

export default App
