import CustomInput from "../store/CustomInput";
import Button from "./Button";
import { useContext } from "react";
import ProgressContext from "../store/UserProgress";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import useHttps from "../../useHttps";
const reqConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
// let [data, errorState, isLoading, sendHttp] = useHttps(
//   "http://localhost:3000/orders",

// );

export default function Checkout() {
  let pConx = useContext(ProgressContext);
  let [data, errorState, isLoading, sendHttp] = useHttps(
    "http://localhost:3000/orders",
    reqConfig
  );
  let CartConx = useContext(CartContext);
  function handelClickForClose() {
    pConx.hideCheckout();
  }
  function handelClickforSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    let fd = new FormData(e.target);
    let customerData = Object.fromEntries(fd.entries());
    sendHttp(
      JSON.stringify({
        order: {
          items: CartConx.items,
          customer: customerData,
        },
      })
    );
  }
  return (
    <Modal open={pConx.status === "checkout"}>
      <form className="control" onSubmit={handelClickforSubmit}>
        <CustomInput
          label={"Full Name"}
          name={"name"}
          type="text"
        ></CustomInput>
        <CustomInput label={"Email"} name={"email"} type="email"></CustomInput>
        <CustomInput label={"Street"} name={"street"} type="text"></CustomInput>
        <p className="control-row">
          <CustomInput
            label={"Postal Code"}
            name={"postal-code"}
            type="text"
          ></CustomInput>
          <CustomInput label={"City"} name={"city"} type="text"></CustomInput>
        </p>
        <p className="modal-actions">
          <Button textOnly onClick={handelClickForClose}>
            Close
          </Button>
          <Button textOnly={false}>submit orser</Button>
        </p>
      </form>
    </Modal>
  );
}
