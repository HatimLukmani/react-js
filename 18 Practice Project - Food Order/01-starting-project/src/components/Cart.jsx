import Modal from "./UI/Modal";
import { useContext } from "react";
import CartContext from "./store/CartContext";
import Button from "./UI/Button";
import ProgressContext from "./store/UserProgress";
import CartItem from "./UI/CartItem";
export default function Cart() {
  let pContext = useContext(ProgressContext);
  const CartCtx = useContext(CartContext);
  function handelClick() {
    pContext.hideCart();
  }
  function handelClickSubmit() {
    console.log("inside settingh checkout");
    pContext.showCheckout();
  }
  let totalAmount = CartCtx.items.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);
  return (
    <Modal classname="cart" open={pContext.status == "cart"}>
      <h2>Your Cart Here !</h2>
      <ul>
        {CartCtx.items.map((item) => (
          //   <li key={item.id}>
          //     {item.name}-{item.quantity}
          //   </li>
          <CartItem item={item}></CartItem>
        ))}
      </ul>
      <p className="cart-total">{totalAmount}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handelClick}>
          close
        </Button>
        <Button textOnly={false} onClick={handelClickSubmit}>
          SubmitMe
        </Button>
      </p>
    </Modal>
  );
}
