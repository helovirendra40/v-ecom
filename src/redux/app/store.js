import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";

// create store
export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});
