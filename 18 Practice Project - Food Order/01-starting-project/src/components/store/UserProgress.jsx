import { createContext, useState } from "react";
let ProgressContext = createContext({
  status: "",
  showCart: () => {
    console.log("hey");
  },
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});
export function ProgressContextProvider({ children }) {
  let [showStatus, setShowStatus] = useState("");
  function showCart() {
    console.log("inside show");
    setShowStatus("cart");
  }
  function hideCart() {
    setShowStatus("");
  }
  function showCheckout() {
    setShowStatus("checkout");
  }
  function hideCheckout() {
    setShowStatus("");
  }
  let ProgressContextData = {
    status: showStatus,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <ProgressContext.Provider value={ProgressContextData}>
      {children}
    </ProgressContext.Provider>
  );
}
export default ProgressContext;
