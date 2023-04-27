import {ActionTypes} from "../Contands/ActionTypes"


export const setProduct =(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const selectedProducts =(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    }
}