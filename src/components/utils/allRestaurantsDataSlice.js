import { createSlice } from "@reduxjs/toolkit";

const allRestaurantsDataSlice = createSlice({
  name: "restaurantsData",
  initialState: {
    restaurants: [],
    cart: [],
  },
  reducers: {
    addResataurants: (state, action) => {
      state.restaurants = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { addResataurants, addToCart } = allRestaurantsDataSlice.actions;
export default allRestaurantsDataSlice.reducer;
