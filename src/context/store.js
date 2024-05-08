import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./CartSlice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
});
