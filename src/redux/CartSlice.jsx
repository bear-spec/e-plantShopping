import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      state.items.push({ ...action.payload, quantity: 1 });
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    removeItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.price * item.quantity;
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
