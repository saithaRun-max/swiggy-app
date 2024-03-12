import { createSlice } from "@reduxjs/toolkit";

const allRestaurantsSlice = createSlice({
  name: "allRestaurantsData",
  initialState: {
    allRestaurants: [],
    restaurantMenuInfo: [],
    restaurantMenuCards: [],
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.allRestaurants = action.payload;
    },
    addRestaurantMenuInfo: (state, action) => {
      state.restaurantMenuInfo = action.payload;
    },
    addRestaurantMenu: (state, action) => {
      state.restaurantMenuCards = action.payload;
    },
  },
});

export const { addRestaurants, addRestaurantMenu, addRestaurantMenuInfo } =
  allRestaurantsSlice.actions;

export default allRestaurantsSlice.reducer;
