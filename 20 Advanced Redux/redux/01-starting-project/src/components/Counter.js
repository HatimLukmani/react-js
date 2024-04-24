import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import { authActions } from "../store";
const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.setVisibility());
  };
  function increamentHandeler() {
    dispatch(counterActions.increament());
  }
  function decreamentHandeler() {
    dispatch(counterActions.decreament());
  }
  const counter = useSelector((state) => state.counter.counter);
  const isVisible = useSelector((state) => state.counter.isVisible);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{isVisible ? counter : " "}</div>
      <div>
        <button onClick={increamentHandeler} disabled={!isVisible}>
          Increament
        </button>
        <button onClick={decreamentHandeler} disabled={!isVisible}>
          Decreament
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
