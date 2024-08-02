import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
};

// cart slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,  
    reducers: {

        addToCart: (state, action) => {

            const itemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);
            console.log("item id", itemIndex);
            if(itemIndex>=0){
                state.carts[itemIndex].qnty +=1;
            }
            else{
                const temp = { ...action.payload, qnty:1}
                state.carts = [...state.carts, temp]
            }
        },

        // remove item from the cart

        removeItem:(state,action)=>{
            const data = state.carts.filter((e)=>e.id !== action.payload);
            state.carts = data
        },

        // remove dec item
        decreamentItem:(state, action)=>{
            const decItem = state.carts.findIndex((item)=> item.id===action.payload.id);
            if(state.carts[decItem].qnty >= 1){
                state.carts[decItem].qnty -= 1;
            }
            
        },

        // remove all 
        empty:(state, action)=>{
            state.carts=[];
        }

    }
});

export const { addToCart, removeItem, decreamentItem, empty } = cartSlice.actions;
export default cartSlice.reducer;
