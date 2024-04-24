import { useState, useRef } from "react";
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const playerName = useRef();

  function clickHandeler() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ""; //HERE AS SHOWN CLEARLY I AM WRITING DECALRATIVE CODE THAT DIRECTLY MANIPULATING THE DOM THIS SHOULD BE THE IDEA BEHIND THE REACT BUT HERE IT IS CONNECTED NOT TO ANY OTHER STATE,YOU SHOULD USE THIS BUT AVOID IT
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={clickHandeler}>Set Name</button>
      </p>
    </section>
  );
}
