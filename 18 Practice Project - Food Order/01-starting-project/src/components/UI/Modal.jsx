import { useEffect } from "react";
import { useRef } from "react";
export default function Modal({ children, open, classname = "" }) {
  let dialog = useRef();
  useEffect(() => {
    console.log(open);
    if (open) {
      console.log("heyyyyyy");
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
  return (
    <dialog className={`modal ${classname}`} ref={dialog}>
      {children}
    </dialog>
  );
}
