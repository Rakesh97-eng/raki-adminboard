import reducer from "./apislice"

const { configureStore } = require("@reduxjs/toolkit");

export const ApiStore = configureStore({
    reducer:{
        apivalue:reducer
    }
})