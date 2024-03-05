import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addRestaurantMenuCards,
  addRestaurantMenuInfo,
} from "../components/utils/allRestaurantsSlice";
import { Menupage_API } from "../components/constants";
import { useParams } from "react-router-dom";

const useGetRestarantMenuData = () => {
  const dispatch = useDispatch();

  const { resId } = useParams();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(Menupage_API + resId);
    const json = await data.json();
    const info = json?.data?.cards[0]?.card?.card?.info;
    const itemCards =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        ?.card?.itemCards;

    dispatch(addRestaurantMenuInfo(info));
    dispatch(addRestaurantMenuCards(itemCards));

  }
};

export default useGetRestarantMenuData;
