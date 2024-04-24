export default function Logging({ Turns }) {
  return (
    <ol id="log">
      {Turns.map((turn) => (
        <li key={`${turn["square"].row}${turn["square"].col}`}>
          {console.log(turn)}
          {turn.player} selected {turn["square"].row},{turn["square"].col}
        </li>
      ))}
    </ol>
  );
}
