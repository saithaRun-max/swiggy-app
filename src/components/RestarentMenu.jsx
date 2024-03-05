import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./constants";
import { Menupage_API } from "./constants";
import { useParams } from "react-router-dom";

import Shimmer2 from "./Shimmer2";
import Menu from "./Menu";
import useGetRestarantMenuData from "../hooks/useGetRestarantMenuData";
import { useSelector } from "react-redux";

const RestarentMenu = () => {
  useGetRestarantMenuData();

  const store = useSelector(
    (store) => store.allRestaurantsData.restaurantMenuInfo
  );

  const store2 = useSelector(
    (store) => store.allRestaurantsData.restaurantMenuCards
  );

  const restarent = store;
  const menu = store2;

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
    <div className="mx-32">
      <div className="flex flex-wrap justify-evenly items-start  m-10 shadow-md">
        <div>
          <img
            className="h-60 rounded-lg"
            src={IMG_CDN_URL + cloudinaryImageId}
            id="cardImg"
          />
          <br />
        </div>

        <div className="flex flex-col justify-between ">
          <h4 className="text-2xl my-4 font-medium">{name}</h4>
          <p className="text-base my-2">
            {locality + ", " + areaName + ", " + city}
          </p>
          <p className="my-2 ">{totalRatingsString}</p>
          <p className="font-medium my-2">
            Cost for Two : {costForTwo / 100}/-
          </p>
        </div>
      </div>
      <div className="shadow-lg">
        <h4 className="font-bold text-xl shadow-lg m-3 p-2">
          Recommended ({menu.length})
        </h4>

        {menu.map((item) => (
          <Menu {...item} key={item.card.info.id} />
        ))}
      </div>
    </div>
  );
};
export default RestarentMenu;
