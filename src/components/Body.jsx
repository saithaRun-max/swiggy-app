import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import "./search.css";
import { Link } from "react-router-dom";

function filterData(searchText, restarent) {
  const filterDatas = restarent.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );

  return filterDatas;
}

const Body = () => {
  const [allRestaurents, setAllReataurents] = useState([]);
  const [filterdrestarent, setFilterdRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);
  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setAllReataurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterdRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurents) return <h1>Not loaded</h1>;

  return allRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          type="text"
          placeholder="Restaurent Name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurents);
            setFilterdRestaurent(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {(searchText.length === 0 ? allRestaurents : filterdrestarent).map(
          (restaurent) => {
            return (
              <div>
                <Link
                  to={"/restaurent/" + restaurent.info.id}
                  key={restaurent.info.id} className="link-tag"
                >
                  <RestaurentCard
                    {...restaurent.info}
                    key={restaurent.info.id}
                  />
                </Link>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Body;
