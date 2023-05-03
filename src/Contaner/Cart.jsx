import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import "../Styles/Product.css"

import {remove} from "../redux/cartSlice"

const Cart = () => {

  const dispatch=useDispatch()
  

  const productCart=useSelector(state=>state.cart)
  const removeCart=(id)=>{
    //dispatch remove action
    dispatch(remove(id))
  }





  const cart =productCart.map(product =>(

    <div className=" col-md-3">

  <div key={product.id} className="product-card">
    <img src={product.image} alt="img" />
    <h3>{product.title}</h3>
    <p className='product-description'>{product.category}</p>
    <p className='product-price'>{product.price}</p>
    <button className='add-to-cart' onClick={()=>removeCart(product.id)}>remove</button>
  </div>
    </div>


))


    
  return (
    <div className='row'>
     {cart}
    </div>
  )
}

export default Cart
