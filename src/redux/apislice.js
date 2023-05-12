import { createSlice } from "@reduxjs/toolkit";

export const ApiSlice = createSlice({
    name:"apivalue",
    initialState:[0],
    reducers:{
        getApi:(state,action)=>{
            console.log("calling");
            return {...state}
         }
    }
})


export default ApiSlice.reducer;

export const {getApi} = ApiSlice.actions;