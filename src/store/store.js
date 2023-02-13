
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../feature/cart/CartSlice"


export default configureStore({
  reducer: {
    cart : cartReducer
  },
})

