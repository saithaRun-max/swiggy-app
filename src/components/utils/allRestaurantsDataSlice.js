import { createSlice } from "@reduxjs/toolkit";

const allRestaurantsDataSlice = createSlice({
  name: "restaurantsData",
  initialState: {
    restaurants: [],
    restaurantMenu: [],
    cart: [],
  },
  reducers: {
    addResataurants: (state, action) => {
      state.restaurants = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
    addRestaurantMenu: (state, action) =>{
      state.restaurantMenu = action.payload;
    }
  },
});

export const { addResataurants, addToCart, addRestaurantMenu } = allRestaurantsDataSlice.actions;
export default allRestaurantsDataSlice.reducer;
