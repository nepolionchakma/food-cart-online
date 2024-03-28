import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useEffect, useState } from 'react'

function App() {
  // const [data, setData] = useState([])
  // const loadData = () => {
  //   fetch("www.themealdb.com/api/json/v1/1/categories.php")
  //     .then(res => res.json())
  //     .then(data => console.log(data, "home"))
  // }
  // useEffect(() => {
  //   loadData()
  // }, [])
  // console.log(data);
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
