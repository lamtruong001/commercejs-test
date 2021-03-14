import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";
import CartSVG from "../svg/shopping-cart.svg";

function CartSummary() {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();
  

  return (
    <div className="w-full">
    <button className="appearance-none focus:outline-none" onClick={openModal}>
      <CartSVG className="pb-1 inline-block" /> ({total_unique_items})
    </button>
    </div>
  );
}

export default CartSummary;
