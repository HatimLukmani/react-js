import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
// import Logs from "./components/Logs.jsx";
// import Logs from "./components/logs";
import Logging from "./components/Logging";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS";
function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [playerTurn, setPlayerTurn] = useState([]);

  let activePlayer = "X";
  if (playerTurn.length > 0 && playerTurn[0].player == "X") {
    activePlayer = "O";
  }
  function resetClickHandeler() {
    setPlayerTurn([]);
  }
  function clickHandeler(rowIndex, colIndex) {
    // setActivePlayer((currSymbol) => (currSymbol == "X" ? "O" : "X"));
    setPlayerTurn((prevPlayerTurn) => {
      let playerSym = "X";
      if (prevPlayerTurn.length > 0 && prevPlayerTurn[0].player == "X") {
        playerSym = "O  ";
      }
      const updatedPlayerTurn = [
        { square: { row: rowIndex, col: colIndex }, player: playerSym },
        ...prevPlayerTurn,
      ];
      return updatedPlayerTurn;
    });
  }
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let gameBoard = initialGameBoard;
  let winner;
  // console.log(turns);
  for (const turn of playerTurn) {
    console.log(turn);
    let { square, player } = turn;
    let { row, col } = square;

    gameBoard[row][col] = player;
  }
  for (const turn of WINNING_COMBINATIONS) {
    let squareOne = gameBoard[turn[0].row][turn[0].column];
    let squareTwo = gameBoard[turn[1].row][turn[1].column];
    let squareThree = gameBoard[turn[2].row][turn[2].column];
    if (squareOne && squareOne === squareTwo && squareOne === squareThree) {
      winner = squareOne;
    }
  }
  let draw = false;
  draw = playerTurn.length == 9 && !winner;

  return (
    <>
      <header>
        <img src="game-logo.png" alt="hand drawn image of tic tae toe" />
        <h1>React Tic-Tac-Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="hatim"
            playerSymbol="X"
            isActive={activePlayer == "X"}
          ></Player>
          <Player
            playerName="anuj"
            playerSymbol="O"
            isActive={activePlayer == "O"}
          ></Player>
        </ol>

        <GameBoard onSelect={clickHandeler} turns={gameBoard} />
        {(winner || draw) && (
          <GameOver
            win={draw ? "draw" : winner}
            onSelect={resetClickHandeler}
          ></GameOver>
        )}
      </div>
      <Logging Turns={playerTurn} />
    </>
  );
}

export default App;
