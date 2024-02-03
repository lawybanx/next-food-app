import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Food } from '@/components/menu/MenuItem';

export interface CartItem extends Food {
  quantity: number;
  total: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      const itemTotal = action.payload.price * action.payload.quantity;

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += action.payload.quantity;
        state.items[existingItemIndex].total += itemTotal;
      } else {
        state.items.push({ ...action.payload, total: itemTotal });
        state.totalItems += 1;
      }

      state.totalPrice += itemTotal;
    },
    increment: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload
      );

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
        state.items[itemIndex].total += state.items[itemIndex].price;
        state.totalPrice += state.items[itemIndex].price;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload
      );

      if (itemIndex !== -1 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
        state.items[itemIndex].total -= state.items[itemIndex].price;
        state.totalPrice -= state.items[itemIndex].price;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload
      );

      if (itemIndex !== -1) {
        state.totalItems -= 1
        state.totalPrice -= state.items[itemIndex].total;
        state.items.splice(itemIndex, 1);
      }
    },
    reset: state => {
      state = initialState;
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart, reset } =
  cart.actions;
export default cart.reducer;
