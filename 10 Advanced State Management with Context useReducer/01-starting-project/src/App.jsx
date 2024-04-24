import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
// import { DUMMY_PRODUCTS } from "./dummy-products.js";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import { CartContext } from "./store/shopping-cat-context.jsx";
import ContextProvider from "./store/shopping-cat-context.jsx";
function App() {
  return (
    <ContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </ContextProvider>
  );
}

export default App;
