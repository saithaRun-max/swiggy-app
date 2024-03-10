import { createSlice } from "@reduxjs/toolkit"


const allRestaurantsDataSlice = createSlice({
    name: "restaurantsData",
    initialState:{
        restaurants: []
    },
    reducers:{
        addResataurants : (state, action) =>{
            state.restaurants = action.payload
        },
    },
})

export const { addResataurants } = allRestaurantsDataSlice.actions;
export default allRestaurantsDataSlice.reducer
