import { configureStore } from "@reduxjs/toolkit";
import cart from "../slice/cart";

export const store = configureStore({
  reducer: cart,
});
