import { useState, useEffect } from "react";

const useRestaurants = () => {
  const [restaurant, setRestaurant] = useState([{}]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // setFilterdRestaurent(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  }
  console.log(restaurant);
  return restaurant;
};

export default useRestaurants;
