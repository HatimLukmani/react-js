import { createContext, useState, useReducer } from "react";
let CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
function reducerFunction(state, action) {
  console.log("inside reducer");
  console.log(action.type);
  if (action.type == "ADD_ITEM") {
    let updatedItems = [...state.items];
    console.log("updated", updatedItems);
    let indexOfItem = updatedItems.findIndex(
      (item) => item.id === action.item.id
    );
    if (indexOfItem > -1) {
      console.log("inside the update qunatity");
      updatedItems[indexOfItem] = {
        ...updatedItems[indexOfItem],
        quantity: updatedItems[indexOfItem].quantity + 1,
      };
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type == "REMOVE_ITEM") {
    //code for adding items
    console.log("inside remove items");
    let updatedItems = [...state.items];
    let indexOfItem = state.items.findIndex((item) => item.id === action.id);
    if (updatedItems[indexOfItem].quantity == 1) {
      console.log("using splice");
      updatedItems.splice(indexOfItem, 1);
    } else {
      updatedItems[indexOfItem] = {
        ...updatedItems[indexOfItem],
        quantity: updatedItems[indexOfItem].quantity - 1,
      };
    }
    return { ...state, items: updatedItems };
  }
  return state;
}
export function CartContextComponent({ children }) {
  const [state, dispatchFunc] = useReducer(reducerFunction, { items: [] });

  const CartDataContext = {
    items: state.items,
    addItem,
    removeItem,
  };
  function addItem(item) {
    dispatchFunc({ type: "ADD_ITEM", item });
  }
  function removeItem(id) {
    dispatchFunc({ type: "REMOVE_ITEM", id });
  }
  return (
    <CartContext.Provider value={CartDataContext}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
