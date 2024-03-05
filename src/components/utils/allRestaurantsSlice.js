import { createSlice } from '@reduxjs/toolkit'


const allRestaurantsSlice = createSlice({
  name: "allRestaurantsData",
  initialState: {
    allRestaurants: [],
  },
  reducers:{
    addRestaurants: (state, action)=>{
state.allRestaurants = action.payload;
    }  }
})


export const {addRestaurants} = allRestaurantsSlice.actions;

export default allRestaurantsSlice.reducer;
