import { useSelector } from "react-redux";
import Cartlist from "./Cartlist";

const Cart = () => {
  const store = useSelector((store) => store.cart.items);

// console.log(store);

if(store.length < 1) return "Your cart is empty"

  return (
    <>
      <div className=" cart-card">
        {store.map((item) => (
          <Cartlist {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};
export default Cart;
