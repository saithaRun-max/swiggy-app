import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./constants";
import { Menupage_API } from "./constants";
import { useParams } from "react-router-dom";
import Shimmer2 from "./Shimmer2";
import Menu from "./Menu";

const RestarentMenu = () => {
  const [restarent, setRestaurent] = useState([]);
  const [menu, setMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(Menupage_API + resId);
    const json = await data.json();

    setRestaurent(json?.data?.cards[0]?.card?.card?.info);
    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        ?.card?.itemCards
    );



  }

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
