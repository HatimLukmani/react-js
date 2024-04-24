import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "./store/CartContext";
export default function Menuitem({ meal }) {
  let CartConx = useContext(CartContext);
  // console.log(meal.name);
  function handelClick() {
    console.log("hey");
    CartConx.addItem(meal);
  }
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handelClick}>Add to cart</Button>
        </p>
      </article>
    </div>
  );
}
