import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import ProductComponent from "../containers/ProductComponent"


import axios from "axios"

const ProductListening = () => {
    const products = useSelector((state)=>state)


    const fetchProducts=async()=>{
      const responce =await axios
      .get("https://fakestoreapi.com/products")
      .catch((err)=>{
        console.log("err",err)
      })
      console.log(responce)
      
    }

     useEffect(()=>{
      fetchProducts()
     },[])
  return (
    <div>
      <h1>product Listening</h1>
      <ProductComponent/>
    </div>
  )
}

export default ProductListening
