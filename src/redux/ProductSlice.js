import { createSlice } from "@reduxjs/toolkit";



const instalState={
    data:[],
}



const ProductSlice =createSlice({
    name:"products",
    initialState:instalState,
    reducers:{
        fetchProducts(state,action){
            state.data=action.payload

        }
        
    }
})


export const {fetchProducts}=ProductSlice.actions

export default ProductSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch,getState){
      const data =await fetch("https://fakestoreapi.com/products")
        const result =data.json() //to get data in json format
        dispatch(fetchProducts(result))
    
    }
}