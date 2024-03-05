import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
import { IMG_CDN_URL } from "./constants";
import "./index.css";

const GroupedCard = (props) => {
  const dispatch = useDispatch();
  const groupCardObj = props;
  const { name, price, imageId } = groupCardObj.card.info;

  const handleAddItem = () => {
    dispatch(addItem(groupCardObj));
  };
  return (
    <>
      <div className="flex justify-around">
        <div className="">
          <img className="w-40" src={IMG_CDN_URL + imageId} />
        </div>
        <div className="">
          <h4>{name}</h4>
          <h4>Price :{price / 100}</h4>
          <button className="" onClick={() => handleAddItem()}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};
export default GroupedCard;
