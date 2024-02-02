import { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "./utils/cartSlice";

const Menu = (props) => {
  const [list, setList] = useState([props]);
  const dispatch = useDispatch();

  const handleCart = (data) => {
    dispatch(addItem(data));
  };

  // console.log(list.card.info.name);
  return (
    <div>
      {list.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.card.info.name}</h3>
            <h4>{item.card.info.price / 100}.00</h4>
            <h5>{item.card.info.category}</h5>
            <button onClick={()=> handleCart(item)}>Add</button>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
