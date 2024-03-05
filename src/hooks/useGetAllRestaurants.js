import { useEffect } from "react";
import { Restaurant_List } from "../components/constants";
import {useDispatch} from "react-redux";
import { addRestaurants} from "../components/utils/allRestaurantsSlice";

const useGetAllRestaurants = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(Restaurant_List);
    const json = await data.json();

   const result = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
dispatch(addRestaurants(result))
  }
};

export default useGetAllRestaurants;
