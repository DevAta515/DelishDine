import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Card from "./components/Card"
import SearchBar from './components/SearchBar'
import OrderBar from './components/OrderBar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrevOrders from './pages/PrevOrders'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/prev" element={<PrevOrders />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
