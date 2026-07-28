import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    // ==========================
    // Add Item
    // ==========================
    addItem: (state, action) => {

      const item = action.payload;

      const existingItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existingItem) {

        existingItem.quantity += 1;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.price;

      } else {

        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });

      }

      state.totalQuantity += 1;

      state.totalAmount = state.cartItems.reduce(
        (total, product) => total + product.totalPrice,
        0
      );
    },

    // ==========================
    // Remove Item
    // ==========================
    removeItem: (state, action) => {

      const id = action.payload;

      const existingItem = state.cartItems.find(
        (product) => product.id === id
      );

      if (!existingItem) return;

      if (existingItem.quantity === 1) {

        state.cartItems = state.cartItems.filter(
          (product) => product.id !== id
        );

      } else {

        existingItem.quantity -= 1;

        existingItem.totalPrice =
          existingItem.quantity * existingItem.price;
      }

      state.totalQuantity -= 1;

      if (state.totalQuantity < 0) {
        state.totalQuantity = 0;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, product) => total + product.totalPrice,
        0
      );
    },

    // ==========================
    // Update Quantity
    // ==========================
    updateQuantity: (state, action) => {

      const { id, quantity } = action.payload;

      const item = state.cartItems.find(
        (product) => product.id === id
      );

      if (!item) return;

      if (quantity <= 0) {

        state.cartItems = state.cartItems.filter(
          (product) => product.id !== id
        );

      } else {

        item.quantity = quantity;
        item.totalPrice = quantity * item.price;

      }

      state.totalQuantity = state.cartItems.reduce(
        (total, product) => total + product.quantity,
        0
      );

      state.totalAmount = state.cartItems.reduce(
        (total, product) => total + product.totalPrice,
        0
      );
    },

    // ==========================
    // Clear Cart
    // ==========================
    clearCart: (state) => {

      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

    },

    // ==========================
    // Calculate Totals
    // ==========================
    calculateTotals: (state) => {

      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

    },

  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
