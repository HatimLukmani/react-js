import { useState } from "react";

export default function Player({
  playerName,
  playerSymbol,
  onSelect,
  isActive,
}) {
  function clickHandeler() {
    setIsEditing((isEditing) => !isEditing);
  }
  function changeHandeler(event) {
    setPlayer(event.target.value);
    console.log(event.target.value);
  }
  const [isEditing, setIsEditing] = useState(false);
  const [player, setPlayer] = useState(playerName);
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{player}</span>
        ) : (
          <input
            type="text"
            required
            value={player}
            onChange={changeHandeler}
          ></input>
        )}

        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={clickHandeler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
