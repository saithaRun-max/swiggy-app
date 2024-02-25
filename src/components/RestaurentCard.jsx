import React from "react";
import { IMG_CDN_URL } from "./constants";

const RestaurentCard = (props) => {
  const { name, cloudinaryImageId, cuisines, locality, areaName } = props;

  return (
    <div className=" min-h-80 max-w-60 m-5 mt-6 shadow-xl rounded-lg p-1 pb-3 ">
      {
        <img
          className="h-40 w-fit  rounded-lg"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="logo"
        />
      }

      <h4 className="text-lg font-semibold my-3 pl-2">{name}</h4>
      <h5 className="text-slate-500 flex pl-2  flex-wrap">
        {cuisines.map((cusine, index) => (
          <h4 className="" key={index}>
            {cusine},
          </h4>
        ))}
      </h5>
      <p className="text-slate-700 block mt-2 pl-2 ">
        {locality + ", " + areaName}
      </p>
    </div>
  );
};

export default RestaurentCard;
