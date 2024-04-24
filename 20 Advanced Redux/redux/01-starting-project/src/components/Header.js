import classes from "./Header.module.css";
import { UseDispatch, useDispatch } from "react-redux";
import { authActions } from "../store";
const Header = () => {
  const dispatch = useDispatch();
  function handelClick() {
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={handelClick}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
