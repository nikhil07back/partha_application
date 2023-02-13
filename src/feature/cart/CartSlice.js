import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({ 
    name : "cart", 
    initialState: [], 
    reducers : {
        add(state , action){ 
            const itemIndex = state.findIndex((item) => item.id === action.payload.id)
                if(itemIndex >= 0){

                }else{
                    state.push(action.payload)
                }
        },
        remove : (state , action) => { 
            return state.filter((item) => item.id !== action.payload)
            
        }
    }
})

export const {add , remove} = CartSlice.actions
export default CartSlice.reducer

