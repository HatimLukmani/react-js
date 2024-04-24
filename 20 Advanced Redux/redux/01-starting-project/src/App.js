import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { UseSelector, useSelector } from "react-redux";
import store from "./store";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <Fragment>
      {isAuth && <Header></Header>}
      {!isAuth && <Auth></Auth>}
      {isAuth && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
