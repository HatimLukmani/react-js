import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextComponent } from "./components/store/CartContext";
import { ProgressContextProvider } from "./components/store/UserProgress";
import Checkout from "./components/UI/Checkout";
function App() {
  return (
    <>
      <CartContextComponent>
        <ProgressContextProvider>
          <Cart></Cart>
          <Checkout></Checkout>
          <Header></Header>
          <Meals></Meals>
        </ProgressContextProvider>
      </CartContextComponent>
    </>
  );
}

export default App;
