import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import allRestaurantsReducer from "./allRestaurantsSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice,
    allRestaurantsData: allRestaurantsReducer, 
  },
});

export default Store;
