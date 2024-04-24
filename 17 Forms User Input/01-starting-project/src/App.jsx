import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
// import stateLogin from "./components/StateLogin.jsx";
import StateLogin from "./components/StateLogin.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <StateLogin />
      </main>
    </>
  );
}

export default App;
