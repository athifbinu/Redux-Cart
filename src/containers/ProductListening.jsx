import React from 'react'
import { useSelector } from 'react-redux'

import ProductComponent from "../containers/ProductComponent"
const ProductListening = () => {
    const products = useSelector((state)=>state)

    console.log(products)
  return (
    <div>
      <h1>product Listening</h1>
      <ProductComponent/>
    </div>
  )
}

export default ProductListening
