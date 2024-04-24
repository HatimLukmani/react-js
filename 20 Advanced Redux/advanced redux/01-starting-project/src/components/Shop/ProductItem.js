import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { dataAction } from "../../store";
import { UseDispatch, useDispatch } from "react-redux";
const ProductItem = (props) => {
  let dispatch = useDispatch();
  const { title, price, description } = props;
  function handelClick() {
    console.log(props);
    dispatch(dataAction.addData(props));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handelClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
