import CoreConcepts from "./Components/coreConcepts.jsx";
import Header from "./Components/Header/Header.jsx";

import Examples from "./Components/Examples.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
