import { useSelector } from "react-redux";
import Cartlist from "./Cartlist";

const Cart = () => {
  const store = useSelector((store) => store.cart.items);

// console.log(store);

  return (
    <>
      <div className=" cart-card">
        {/* cart items - {store.length} */}
        {store.map((item) => (
          <Cartlist {...item} key={item.card.info.id} />
        ))}
      </div>
    </>
  );
};
export default Cart;
