import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./constants";
import { Menupage_API } from "./constants";
import { useParams } from "react-router-dom";

import Shimmer2 from "./Shimmer2";
import Menu from "./Menu";
// import useGetRestarantMenuData from "../hooks/useGetRestarantMenuData";
import { useSelector } from "react-redux";
import useRestaurantOfflineData from "../hooks/useRestaurantData";

const RestarentMenu = () => {
  //  useGetRestarantMenuData();
  useRestaurantOfflineData();

  const { resId } = useParams();

  const store = useSelector(
    (store) => store.allRestaurantsData.restaurantMenuInfo
  );

  const store2 = useSelector(
    (store) => store.allRestaurantsData.restaurantMenuCards
  );

  const res = useSelector((store) => store.restaurantsData.restaurants);

//another way
  // const restauransData = useSelector((store)=> store.restaurantsData.restaurantMenu)

 

  const filterData = res.filter((item) => item.id == resId);
  const data = filterData[0];
  // const restarent = store;
  // const menu = store2;
  if (!data) return;
  const restarent = data;
  const menu = data.menuCards;

  // console.log(menu[0].id)

  if (!restarent) return <Shimmer2 />;

  const {
    name,
    locality,
    areaName,
    city,
    cloudinaryImageId,
    totalRatingsString,
    costForTwo,
  } = restarent;

  return (
    <div className="lg:mx-32 sm:mx-28 p-8 ">
      <div className="flex flex-wrap justify-evenly items-start   my-10 shadow-md sm:m-2 min-w-60">
        <div className="">
          <img
            className="min-h-60  rounded-lg"
            src={IMG_CDN_URL + cloudinaryImageId}
            id="cardImg"
          />
          <br />
        </div>

        <div className="flex flex-col justify-between ">
          <h4 className="text-2xl px-2 mt-4 font-medium">{name}</h4>
          <p className="text-base px-2 my-2">
            {locality + ", " + areaName + ", " + city}
          </p>
          <p className="my-2 ">{totalRatingsString}</p>
          <p className="font-medium my-2 px-2">
            {/* Cost for Two : {costForTwo / 100}/- */}
            Offer: {costForTwo}
          </p>
        </div>
      </div>
      <div className="shadow-lg">
        <h4 className="font-bold text-xl shadow-lg m-3 p-2">
          Recommended ({menu.length})
        </h4>

        {/* {menu.map((item) => (
          <Menu {...item} key={item.card.info.id} />
        ))} */}

        {menu.map((item) => (
          <Menu {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default RestarentMenu;
