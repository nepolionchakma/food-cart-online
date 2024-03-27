import './App.css'
import ABCD from './components/ABCD'
import Categories from './components/Categories'
import Country from './components/Country'
import FoodData from './components/FoodData'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header></Header>
      <Categories></Categories>
      <FoodData></FoodData>
      <Country></Country>
      <ABCD></ABCD>
    </>
  )
}

export default App
