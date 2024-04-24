import { forwardRef, useImperativeHandle, useReducer, useRef } from "react";
import { createPortal } from "react-dom";
const ResultDialog = forwardRef(function ResultDialog(
  { result, targetTime, remainingTime, submitHandeler },
  ref
) {
  const isTimerOn = remainingTime > 0;
  const remainingTimeInSec = remainingTime / 1000;
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <h2>{isTimerOn && <p>You lost</p>}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stop with <strong>{remainingTimeInSec}</strong> seconds left
      </p>
      <form method="dialog">
        <button onClick={submitHandeler}>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultDialog;
