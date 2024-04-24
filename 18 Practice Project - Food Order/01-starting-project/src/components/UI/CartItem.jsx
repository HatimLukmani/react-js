import { useContext } from "react";
import CartContext from "../store/CartContext";
export default function CartItem({ item }) {
  let CartConx = useContext(CartContext);
  function hadelIncreament() {
    CartConx.addItem(item);
  }
  function hadelDecreament() {
    console.log(item.name);
    console.log(item.id);
    CartConx.removeItem(item.id);
  }
  return (
    <li className="cart-item">
      <p>
        {item.name}-{item.quantity} x {item.price}
      </p>
      <p className="cart-item-actions">
        <button onClick={hadelDecreament}>-</button> {item.quantity}
        <button onClick={hadelIncreament}>+</button>
      </p>
    </li>
  );
}
