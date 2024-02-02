import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "./constants";
import "./header.css";
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
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.2472528&lng=80.1514447&restaurantId=" +
        resId
    );

    const json = await data.json();
    setRestaurent(json?.data?.cards[0]?.card?.card?.info);
    // [0]?.card?.card?.info
    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        ?.card?.itemCards
    );

    console.log(restarent);
  }

  if (!restarent) return <Shimmer2 />;

  const {
    name,
    locality,
    areaName,
    city,
    cloudinaryImageId,
    totalRatingsString,
  } = restarent;

  return (
    // <>{ restaurantMenu.name}</>
    <div>
      <div className="Restarent-Menu">
        <div>
          <h4>{name}</h4>
          <h4>{locality + ", " + areaName + ", " + city}</h4>
          <h5>
            <label>Rattings: </label>
          </h5>
          {totalRatingsString} ⭐⭐⭐⭐⭐🎖️ <br />
        </div>
        <div>
          <img src={IMG_CDN_URL + cloudinaryImageId} id="cardImg" />
          <br />
        </div>
      </div>
      <h4>Menu</h4>

      {menu.map((item) => (
        <Menu {...item} key={item.card.info.id} />
      ))}

      {/* {
        ...menu.map((list)=>{<div>
          <h4>list.card.info.name</h4>
          <h4>list.card.info.price/100</h4>
          <button>Add</button>
          </div>
        })
      } */}
    </div>
  );
};
export default RestarentMenu;
