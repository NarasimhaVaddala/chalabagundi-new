import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // array of wishlist products
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const item = action.payload;
      const exists = state.items.find(
        (i) => i.name === item.name && i.category === item.category
      );
      if (!exists) {
        state.items.push(item);
      }
    },
    removeFromWishlist(state, action) {
      const { name, category } = action.payload;
      state.items = state.items.filter(
        (i) => !(i.name === name && i.category === category)
      );
    },
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
