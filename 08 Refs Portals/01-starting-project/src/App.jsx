import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" seconds="1"></TimerChallenge>
        <TimerChallenge title="Not easy" seconds="5"></TimerChallenge>
        <TimerChallenge title="Meddium" seconds="10"></TimerChallenge>
        <TimerChallenge title="Only Pros" seconds="20"></TimerChallenge>
      </div>
    </>
  );
}

export default App;
