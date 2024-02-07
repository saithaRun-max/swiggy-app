import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import "../index.css";
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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterdRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurents) return <h1>Not loaded</h1>;

  return allRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex ml-16">
        <input
          className="box-border px-3 placeholder:text-lg placeholder:px-2 h-12 w-3/4 m-6 border border-teal-300  focus:ring-3 focus:outline-none focus:ring-teal-400 focus: rounded-md"
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterData(searchText, allRestaurents);
            setFilterdRestaurent(data);
          }}
        />

        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurents);
            setFilterdRestaurent(data);
          }}
          type="submit"
          className="p-2.5  text-sm font-medium text-b rounded-md borderhover:bg-blue-400 focus:ring-1 focus:outline-none focus:ring-blue-400 h-12 m-6 -ml-16  "
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="mx-2 ml-16 rounded-sm flex  justify-items-start flex-wrap">
        {(searchText.length === 0 ? allRestaurents : filterdrestarent).map(
          (restaurent, index) => {
            return (
              <div className="" key={index}>
                <Link
                  to={"/restaurent/" + restaurent.info.id}
                  key={restaurent.info.id}
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
