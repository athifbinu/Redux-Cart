import { createSlice } from "@reduxjs/toolkit";



const instalState=[];

const cartSlice =createSlice({
    name:"cart",
    initialState:instalState,
    reducers:{
        //add to cart
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item=>item.id !== action.payload)
        }
    
    }
})


export const {add,remove}=cartSlice.actions

export default cartSlice.reducer;

//slice is return in two things 1. action add funtion 2.reducer state





                