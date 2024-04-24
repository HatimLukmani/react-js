import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";
import MainNavigation from "./components/MainNavigation.js";
import RootLayout from "./components/RootLayout.js";
import ErrorPage from "./pages/ErrorPage.js";
import ProductDetails from "./pages/ProductDetails.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "product",
        element: <Product></Product>,
      },
      {
        path: "product/:pid",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <MainNavigation></MainNavigation> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
