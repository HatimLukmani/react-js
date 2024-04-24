import { Link } from "react-router-dom";
import Classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
