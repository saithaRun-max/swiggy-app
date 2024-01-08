import { useDispatch } from "react-redux";
import "./header.css";
import { removeItem } from "./utils/cartSlice";

const Cartlist = (props) => {
  const { name, price, category, id } = props.card.info;

  const dispatch = useDispatch();

  const deleteItem = (dta) => {
    dispatch(removeItem(dta));
  };

  return (
    <div className="cartlist-container">
      <div className="">
        <h4>{name}</h4>
        <h4>rupees {price / 100} /-</h4>
        <h4>{category}</h4>
      </div>
      <div>
        <div className="cartlist-btns">
          <button
            className="cartlist-remove-btn"
            onClick={() => deleteItem(id)}
          >
            Remove
          </button>
          <button className="cartlist-buy-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default Cartlist;
