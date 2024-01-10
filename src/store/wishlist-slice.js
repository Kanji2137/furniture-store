import {createSlice} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    itemsList: [],
  },
  reducers: {
    addToWishlist(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          url: newItem.url,
          description: newItem.description,
          name: newItem.name
        });
      }
    },
    removeWishlistItems(state, action) {
      const id = action.payload;
      state.itemsList = state.itemsList.filter(item => item.id !== id);
    }
  }
})

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;