import React, { useState } from 'react';
import { useEffect } from 'react';
import "../Styles/Product.css"
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';


const Product = () => {

     const dispatch=useDispatch()

     const [products,getProducts]=useState([])

     useEffect(()=>{
          fetch('https://fakestoreapi.com/products')
          .then(data=>data.json())
          .then(result=>getProducts(result))
     },[])

     

     const addTocart=(product)=>{
          //dispatch an action
          dispatch(add(product))

     }




     const card =products.map(product =>(

          <div className=" col-md-3">
           <div key={product.id} className="product-card">
            <img src={product.image} alt="img" />
            <h3>{product.title}</h3>
            <p className='product-description'>{product.category}</p>
            <p className='product-price'>{product.price}</p>
            <button className='add-to-cart' onClick={()=>addTocart(product)}>Add To Cart</button>
            </div>
            </div>
  
  
       ))

  return (
    <div className='row'>
        {card}
    </div>
  );
}

export default Product;
