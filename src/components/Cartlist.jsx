import { useDispatch } from "react-redux";
import { removeItem } from "./utils/cartSlice";



const Cartlist = ({ name, defaultPrice, price, category, id }) => {

  const dispatch = useDispatch();

  function deleteItem(idNum){
    dispatch(removeItem(idNum));
  };


  return  (
    <div className="flex justify-between rounded-sm shadow-lg  border border-b-2 h-40 items-center mx-14 p-4 m-2">
      <div className="">
        <h4 className="mt-8 m-3 text-lg text-cyan-500 font-semibold">{name}</h4>
        <h4 className=" m-3 font-medium">Rupees {(price ? price : defaultPrice) / 100} /-</h4>
      </div>
      <div>
        <div className="p-4">
          <button
            className="bg-indigo-400 text-white text- border-2 border-indigo hover:bg-red-700 hover:text-white px-4 rounded-md p-1 ml-5"
            onClick={() => deleteItem(id)}
          >
            Remove
          </button>
          <button className="bg-blue-700 text-white text- border-2 border-indigo hover:bg-green-700 hover:text-white px-4 rounded-md p-1 ml-5">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cartlist;
