import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
import { v4 as uuidv4 } from "uuid";
import { addToCart } from "./utils/allRestaurantsDataSlice";

const Menu = (props) => {
  const [list, setList] = useState([props]);
  const dispatch = useDispatch();
  const uuId = uuidv4();


  const handleCart = (data) => {
    dispatch(addItem(data));
    // dispatch(addItem(data.card.info));
  };

  return (
    <div>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between  border border-b-2 h-32"
          >
            <div>
              <h3 className="mt-8 m-3 text-xl text-green-800 font-semibold">
                {item.name}
              </h3>
              <h4 className=" m-3 font-medium">
                Rupees :{" "}
                <span className="text-red-700 font-bold">
                  {(item.defaultPrice ? item.defaultPrice : item.price) / 100}
                  /-
                </span>
              </h4>
            </div>

            {/* <div>
              <h3 className="mt-8 m-3 text-xl text-green-800 font-semibold">
                {item.card.info.name}
              </h3>
              <h4 className=" m-3 font-medium">
                Rupees :{" "}
                <span className="text-red-700 font-bold">
                  {(item.card.info.defaultPrice
                    ? item.card.info.defaultPrice
                    : item.card.info.price) / 100}
                  /-
                </span>
              </h4>
            </div> */}

            <div className="mt-10">
              <button className="p-2" onClick={() => handleCart(item)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
