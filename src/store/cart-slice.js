import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          url: newItem.url,
          description: newItem.description,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        });
      }
      state.totalQuantity++;
    },
    decrementCartItems(state, action) {
      const id = action.payload;

      const existingItem = state.itemsList.find(item => item.id === id);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    removeCartItems(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find(item => item.id === id);
      state.totalQuantity -= existingItem.quantity;
      state.itemsList = state.itemsList.filter(item => item.id !== id);
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice;