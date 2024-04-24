import { useRef, useEffect, useState } from "react";

export default function DeleteConfirmation({
  onConfirm,
  onCancel,
  timSeconds,
}) {
  const [remainingTime, setRemainingTime] = useState(timSeconds * 1000);
  console.log("TIMER IS SET");
  useEffect(() => {
    let interval = setInterval(() => {
      setRemainingTime((remainingTime) => remainingTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    let timer = setTimeout(() => {
      onConfirm();
    }, timSeconds * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={timSeconds * 1000}></progress>
    </div>
  );
}
