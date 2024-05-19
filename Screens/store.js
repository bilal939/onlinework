import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../cartslice/cartslice";
import CategorySlice from "../CategorySlice/CategorySlice";
const store = configureStore({
    reducer:{
        cart:cartslice,
        category:CategorySlice
    }
})

export default store;