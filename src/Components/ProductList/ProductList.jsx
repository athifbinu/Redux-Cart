import React from 'react'
import products from '../../api/product.json'
import AfterCart from './cartbuttons/AfterCart'
import BeforeCart from './cartbuttons/BeforeCart'
import { useState } from 'react'

import "./ProductList"
const ProductList = () => {

  
   const [count,setCount]=useState(0)


   const addToCart =()=>{
       setCount(1)
   }

  return (
    <section className="container">
    {products?.map((product, key) => (
       <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          

          <BeforeCart addToCart={addToCart}/>
          <AfterCart/>
       </div>
    ))}
 </section>
  )
}

export default ProductList



//? are used To not working api but its handle
