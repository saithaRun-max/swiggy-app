import React from "react";
import "./restaurentCard.css";
import { IMG_CDN_URL } from "./constants";

const RestaurentCard = (props) => {
  const {name,cloudinaryImageId, cuisines, locality, areaName} = props ;
  return (
    <div className="card">
      {<img src={IMG_CDN_URL + cloudinaryImageId} alt="logo" />}
      <h4 className="color">{name}</h4>
      <h5 className="color">
      <ul> {
        cuisines.map((res, index) => (
          <li key={index}>{res}</li>
        ))
        }</ul>
      </h5>
      <p className="adress">{locality + ", " + areaName}</p>
    </div>
  );
};

export default RestaurentCard;
