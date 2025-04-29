import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // Array to hold cart items
  totalprice: 0, // To keep track of the total cart price
};

export const plantSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    // Add item to the cart and update total price
    addToCart: (state, action) => {
      state.cart.push(action.payload); // Add new plant to cart
      // Calculate the new total price by summing all plant prices in the cart
      const prices = state.cart.map((each) => each.price);
      state.totalprice = prices.reduce((a, b) => a + b, 0); // Sum up prices
    },

    // Remove item from cart and update total price
    removeFromCart: (state, action) => {
      // Find the item index using its unique id
      const index = state.cart.findIndex(
        (plant) => plant.id === action.payload.id
      );
      if (index !== -1) {
        state.cart.splice(index, 1); // Remove item if found
      }
      // Recalculate total price after removal
      const pricearray = state.cart.map((each) => each.price);
      state.totalprice = pricearray.reduce((a, b) => a + b, 0); // Update total
    },

    // Reset the cart and total price
    resetCart: (state) => {
      state.cart = []; // Clear cart items
      state.totalprice = 0; // Reset total price to 0
    },
  },
});

// Export actions for use in components
export const { addToCart, removeFromCart, resetCart } = plantSlice.actions;

// Selector to access the cart from the Redux store
export const selectCart = (state) => state.plants.cart;

// Export the reducer to configure the store
export default plantSlice.reducer;
