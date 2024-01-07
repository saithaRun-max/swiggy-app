import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./constants";
import "./header.css";
import { useParams } from "react-router-dom";
import Shimmer2 from "./Shimmer2";

const RestarentMenu = () => {
  const [restarent, setRestaurent] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.2472528&lng=80.1514447&restaurantId=" +
        resId
    );

    const json = await data.json();
    setRestaurent(json?.data?.cards[0]?.card?.card?.info);
  }

  if (!restarent) return <Shimmer2 />;

  console.log(restarent);

  const {
    name,
    id,
    locality,
    areaName,
    city,
    cloudinaryImageId,
    totalRatingsString,
    cuisines
  } = restarent;
  return (
    <div>
      <div className="Restarent-Menu">
        <div>
          <h4>
            <label>Restarent : </label>
          </h4>
          <span>{name}</span>
          <h4>
            <label>Id : </label>{" "}
          </h4>
          {id} 
          <h4>
            <label>Address: </label>
          </h4>
          {locality + ", " + areaName + ", " + city} <br />
          <h5>
            <label>Rattings: </label>
          </h5>{" "}
          {totalRatingsString} ⭐⭐⭐⭐⭐🎖️ <br />
          <h4>Cuisines :</h4> <ul>{cuisines.map((item, index)=> <li>{item}</li>)}</ul>
        </div>
        <div>
          <img src={IMG_CDN_URL + restarent.cloudinaryImageId} id="cardImg" />
          <br />
        </div>
      </div>
    </div>
  );
};
export default RestarentMenu;
