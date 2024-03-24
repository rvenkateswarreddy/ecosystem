// plantSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalprice: 0,
};

export const plantSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      const prices = state.cart.map((each) => each.price);
      state.totalprice = prices.reduce((a, b) => a + b);
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (plant) => plant.id === action.payload.id
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
      const pricearray = state.cart.map((each) => each.price);
      state.totalprice = pricearray.reduce((a, b) => a + b);
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = plantSlice.actions;

export const selectCart = (state) => state.plants.cart;

export default plantSlice.reducer;
