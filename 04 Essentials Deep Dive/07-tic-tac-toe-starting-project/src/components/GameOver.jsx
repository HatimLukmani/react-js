export default function GameOver({ win, onSelect }) {
  return (
    <div id="game-over">
      <h2>The game is Over </h2>
      {win == "draw" ? <p>Match is darw</p> : <p>{win} has the match</p>}
      <button onClick={onSelect}>Rematch</button>
    </div>
  );
}
