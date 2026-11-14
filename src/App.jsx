
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ScrollToTop from './component/ScrollToTop'

function App() {

  return (
    <>
    <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
