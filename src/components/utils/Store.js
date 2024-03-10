import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import allRestaurantsReducer from "./allRestaurantsSlice";
import allRestaurantsDataReducer from "./allRestaurantsDataSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice,
    allRestaurantsData: allRestaurantsReducer, 
    restaurantsData:allRestaurantsDataReducer,
  },
});

export default Store;
