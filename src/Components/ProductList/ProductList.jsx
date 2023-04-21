import React from 'react'
import products from '../../api/product.json'
import AfterCart from './cartbuttons/AfterCart'
import BeforeCart from './cartbuttons/BeforeCart'


const ProductList = () => {
  return (
      <section className='container'>
          {products.map((product,key)=>{
            <div className="main-container" key={key}>
              <img src={product?.image} alt="" />
              <h3>{product?.title}</h3>

              <AfterCart/>
              <BeforeCart/>
             

            </div>
          })}
      </section>
  )
}

export default ProductList



//? are used To not working api but its handle
