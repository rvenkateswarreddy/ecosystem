// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./plantSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
