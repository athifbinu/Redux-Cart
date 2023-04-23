import React from 'react'
import "./CartButton.css"
const BeforeCart = ({addToCart}) => {
  return (
    <div className="before-cart">
         <button className="add-cart-button">
            Add to cart
         </button>
      </div>
  )
}

export default BeforeCart
