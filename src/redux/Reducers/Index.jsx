import { createStore } from "@reduxjs/toolkit";


import { productReducer } from "./ProductReducer";

const reducers =createStore({
    allProducts:productReducer,

})


export default reducers