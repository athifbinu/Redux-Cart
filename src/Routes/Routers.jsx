import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'


import Product from "../Contaner/Product"
import Cart from "../Contaner/Cart"
const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/product"/>} />

        <Route path="product" element={<Product/>} />

        <Route path="cart" element={<Cart/>} />
   
      
    </Routes>
  )
}

export default Routers
