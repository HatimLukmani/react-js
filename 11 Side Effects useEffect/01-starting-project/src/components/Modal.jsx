import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal({ children, openModal }) {
  useEffect(() => {
    if (openModal) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [openModal]);
  const dialog = useRef();
  return createPortal(
    <dialog className="modal" ref={dialog}>
      {openModal ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
