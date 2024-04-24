import { useSelector, useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { dataAction } from "../../store";
const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const data = useSelector((state) => state.data.dataCart);
  let dispatch = useDispatch();
  console.log("sss", data);
  // if (data) {
  //   data.forEach((element) => {
  //     console.log(element);
  //   });
  // }
  function handelIncreament(ele) {
    console.log(ele);
    dispatch(dataAction.addQuantity(ele));
  }
  function handelDecrement(ele) {
    dispatch(dataAction.removeQuantity(ele));
  }
  return (
    <>
      {data &&
        data.map((ele) => {
          return (
            <li key={ele.title} className={classes.item}>
              <header>
                <h3>{ele.title}</h3>
                <div className={classes.price}>
                  {/* ${total.toFixed(2)}{" "}
                   */}
                  {ele.price * ele.quantity}
                  <span className={classes.itemprice}>
                    (${ele.price.toFixed(2)}/item)
                  </span>
                </div>
              </header>
              <div className={classes.details}>
                <div className={classes.quantity}>
                  x <span>{ele.quantity}</span>
                </div>

                <div className={classes.actions}>
                  {console.log("hey", ele)}
                  <button onClick={() => handelDecrement(ele)}>-</button>
                  <button onClick={() => handelIncreament(ele)}>+</button>
                </div>
              </div>
            </li>
          );
        })}
    </>
  );
};

export default CartItem;
