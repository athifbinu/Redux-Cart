
import React, { useEffect } from 'react'
import { useState } from 'react'


import "../Styles/Product.css"


const Product = () => {
    const [products,getProduct]=useState([])

    useEffect(()=>{
     fetch("https://fakestoreapi.com/products")
        .then(data=>data.json()) //to get data in json format
        .then(result=>getProduct(result))
    },[])

    console.log(products)
    
     const card =products.map(product =>(

          <div className=" col-md-3">

        <div key={product.id} className="product-card">
          <img src={product.image} alt="img" />
          <h3>{product.title}</h3>
          <p className='product-description'>{product.category}</p>
          <p className='product-price'>{product.price}</p>
          <button className='add-to-cart'>Add To Cart</button>
        </div>
          </div>


     ))
  return (
    <>
       <div className="row">
           {card}
       </div>
    </>
  )
}

export default Product
