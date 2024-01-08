import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
import { IMG_CDN_URL } from "./constants";
import "./header.css";



const GroupedCard = (props) => {
  const groupCardObj = props;
    const {name, price, imageId} = groupCardObj.card.info;
    
    const dispatch = useDispatch();


  const handleAddItem = () => {
    dispatch(addItem(groupCardObj));
  };
  return (
    <>
      <div className="gc-container">
        <div className="">
          <img className="gc-img" src={IMG_CDN_URL + imageId} />
        </div>
        <div className="details">
          <h4>{name}</h4>
          <h4>Price :{price/100}</h4>
          <button className="gc-add-btn" onClick={() => handleAddItem()}>Add</button>
        </div>
      </div>
    </>
  );
};
export default GroupedCard;
