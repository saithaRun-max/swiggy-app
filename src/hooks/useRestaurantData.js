import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restaurants } from "../components/restaurantsData";
import { addResataurants } from "../components/utils/allRestaurantsDataSlice";

const useRestaurantData = () => {
  const dispatch = useDispatch();

  dispatch(addResataurants(restaurants));
};

export default useRestaurantData;
