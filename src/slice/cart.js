import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";

const initialState = {
  quantity: 0,
  productList: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.quantity += action.payload;
    },
    decrement: (state, action) => {
      state.quantity -= action.payload;
    },
    productReady: (state, action) => {
      state.productList = [...state.productList, action.payload];
    },
    deleteProduct: (state, action) => {
      state.productList = state.productList.filter((info) => {
        return info.id !== action.payload;
      });
    },
    deleteQuantity: (state, action) => {
      const eliminarQuantity = state.productList.map((product) => {
        return state.quantity - product.quantityIndividual;
      });

      state.quantity = eliminarQuantity;
    },
    updateQuantity: (state, action) => {
      const test = state.productList.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantityIndividual: product.quantityIndividual + 1,
          };
        } else if (product.price === action.payload) {
          return {
            ...product,
            quantityIndividual: product.quantityIndividual - 1,
          };
        }
        return product;
      });

      state.productList = test;
    },
  },
});

export const {
  increment,
  decrement,
  productReady,
  deleteProduct,
  updateQuantity,
  deleteQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
