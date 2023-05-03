import { createSlice } from "@reduxjs/toolkit";



const instalState=[];
const cartSlice =createSlice({
    name:"cart",
    initialState:instalState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        }
    }
})


export const {add}=cartSlice.actions

export default cartSlice.reducer;