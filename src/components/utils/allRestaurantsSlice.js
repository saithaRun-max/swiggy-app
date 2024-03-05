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
    addRestaurantMenuCards: (state, action) => {
      state.restaurantMenuCards = action.payload;
    },
  },
});

export const { addRestaurants, addRestaurantMenuCards, addRestaurantMenuInfo } =
  allRestaurantsSlice.actions;

export default allRestaurantsSlice.reducer;
