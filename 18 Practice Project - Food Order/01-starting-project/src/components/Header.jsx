import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "./store/CartContext";
import { useContext } from "react";
import ProgressContext from "./store/UserProgress";
export default function Header() {
  let cContext = useContext(CartContext);
  let pContext = useContext(ProgressContext);
  let length =
    cContext.items &&
    cContext.items.reduce((sum, curr) => sum + curr.quantity, 0);

  function handelClick() {
    console.log("Hwey");
    console.log(pContext);
    pContext.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Hotel's logo" />
        <h1>Hatim's cuisine</h1>
      </div>
      <nav>
        <Button textOnly onClick={handelClick}>
          Cart({length ? length : 0})
        </Button>
      </nav>
    </header>
  );
}
