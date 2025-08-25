import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // array of products with quantity
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const existing = state.items.find(
        (i) => i.name === item.name && i.category === item.category
      );
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },

    removeFromCart(state, action) {
      const { name, category } = action.payload;

      state.items = state.items.filter(
        (i) => !(i.name === name && i.category === category)
      );
    },

    updateQuantity(state, action) {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item) item.quantity = quantity;
    },
    clearCart(state) {
      state.items = [];
    },

    incrementQty(state, action) {
      const { name, category } = action.payload;
      const item = state.items.find(
        (i) => i.name === name && i.category === category
      );
      if (item) item.quantity += 1;
    },
    decrementQty(state, action) {
      const { name, category } = action.payload;
      const item = state.items.find(
        (i) => i.name === name && i.category === category
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  incrementQty,
  decrementQty,
} = cartSlice.actions;
export default cartSlice.reducer;
