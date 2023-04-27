import { ActionTypes } from "../Contands/ActionTypes"

const intialstate ={
    products:[{
        id:1,
        title:"Athif",
        category:"programmer",
    }]
}

export const productReducer=(state = intialstate,{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return state;

            default:
                return state;
    }

}