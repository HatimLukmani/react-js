import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { UseDispatch, useDispatch } from "react-redux";
import { cartAction } from "./store";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store";
import { fetchData } from "./store";
let initially = true;
function App() {
  let isVisible = useSelector((state) => state.cart.isVisible);
  let notification = useSelector((state) => state.cart.notification);
  let data = useSelector((state) => state.data.dataCart);
  console.log("data from app", data);
  let dispatch = useDispatch();
  useEffect(() => {
    console.log("iniside use effect of fetch");
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    if (initially) {
      initially = false;
      return;
    }
    console.log("datassss", data);
    dispatch(sendCartData(data));
  }, [data, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
