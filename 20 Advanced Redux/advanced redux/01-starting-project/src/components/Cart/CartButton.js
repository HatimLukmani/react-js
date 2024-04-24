import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { cartAction } from "../../store";
const CartButton = (props) => {
  let dispatch = useDispatch();
  function handelClick() {
    dispatch(cartAction.setVisible());
  }
  return (
    <button className={classes.button} onClick={handelClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
