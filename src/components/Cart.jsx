import { useSelector } from "react-redux";
import Cartlist from "./Cartlist";

const Cart = () => {
  const store = useSelector((store) => store.cart.items);

  return (
    <>
      <div>
        {
        (store.length < 1) ? <h1 className="font-bold text-2xl text-center m-5">Your cart is empty</h1> :
        store.map((item) => (
          <Cartlist {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};
export default Cart;
