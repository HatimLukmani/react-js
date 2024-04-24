import { createSlice, configureStore, createAction } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    isVisible: true,
    notification: {
      status: "",
      title: "",
      message: "",
    },
  },
  reducers: {
    setVisible(state) {
      state.isVisible = !state.isVisible;
    },
    setNotification(state, action) {
      console.log("jsdsabbhsadhb");

      let data = action.payload;
      console.log(data);
      state.notification.status = data.status;
      state.notification.title = data.title;
      state.notification.message = data.message;
    },
  },
});
const data = createSlice({
  name: "data",
  initialState: { dataCart: [] },
  reducers: {
    addData(state, d) {
      console.log("hatim", state.dataCart);
      let data = d.payload;
      let index = -1;
      console.log("inside add data ", data);

      console.log("passing id condition", state.dataCart);

      index = state.dataCart.findIndex(
        (element) => element.title === data.title
      );

      console.log("index", index);
      if (index > -1) {
        state.dataCart[index] = {
          ...state.dataCart[index],
          quantity: state.dataCart[index].quantity + 1,
        };
      } else {
        state.dataCart.push({ ...data, quantity: 1 });
      }
    },
    replaceData(state, d) {
      state.dataCart = d.payload;
    },
    addQuantity(state, d) {
      let data = d.payload;

      let index = state.dataCart.findIndex(
        (element) => element.title === data.title
      );
      console.log("index", index);

      state.dataCart[index] = {
        ...state.dataCart[index],
        quantity: state.dataCart[index].quantity + 1,
      };
    },
    removeQuantity(state, d) {
      let data = d.payload;
      let index = state.dataCart.findIndex(
        (element) => element.title === data.title
      );
      console.log(state.dataCart[index]);
      //   state.cartData[index].quantity -= 1;
    },
  },
});
export const sendCartData = (data) => {
  console.log("jdjdjjkdjdfjkdhatim is gr8", data);
  return async (dispatch) => {
    dispatch(
      cartAction.setNotification({
        status: "pending",
        title: "fetching data..",
        message: "fetching data ...",
      })
    );
    const response = await fetch(
      "https://reducerdemo-default-rtdb.firebaseio.com/data.json",
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
    console.log("data.ok", response.ok);
    // const responseData = await fetchData.json();
    if (!response.ok) {
      dispatch(
        cartAction.setNotification({
          status: "error",
          title: "fetched data unsuccessfully..",
          message: "fetching data unsuccessfully...",
        })
      );
    }
    dispatch(
      cartAction.setNotification({
        status: "success",
        title: "fetched data successfully..",
        message: "fetching data successfully...",
      })
    );
  };
};
export const fetchData = () => {
  return async (dispatch) => {
    console.log("inside fetch data ");
    dispatch(
      cartAction.setNotification({
        status: "pending",
        title: "fetching data(GET)..",
        message: "fetching data(GET) ...",
      })
    );
    const getData = async () => {
      let response = await fetch(
        "https://reducerdemo-default-rtdb.firebaseio.com/data.json"
      );
      if (!response.ok) {
        throw new Error("hey there is errrop");
      }
      let responseData = await response.json();
      console.log("inside action creator fetching part", responseData);
      return responseData;
    };
    try {
      let data = await getData();
      console.log("your entered dat", data);
      dispatch(dataAction.replaceData(data));
    } catch (error) {
      dispatch(
        cartAction.setNotification({
          status: "error",
          title: "failed fetching data(GET)..",
          message: "failed fetching data(GET) ...",
        })
      );
    }
  };
};
const store = configureStore({
  reducer: { cart: cart.reducer, data: data.reducer },
});
export const cartAction = cart.actions;
export const dataAction = data.actions;
export default store;
