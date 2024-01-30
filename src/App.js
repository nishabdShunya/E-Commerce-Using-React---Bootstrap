import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Layout/Header";
import Albums from "./components/Products/Albums";
import Merchandise from "./components/Products/Merchandise";
import Footer from "./components/Layout/Footer";
import CartContextProvider from "./store/CartContextProvider";
import About from "./components/About/About";

const router = createBrowserRouter([
  { path: "/", element: <About /> },
  {
    path: "/products",
    element: (
      <Fragment>
        <Albums />
        <Merchandise />
      </Fragment>
    ),
  },
]);

function App() {
  return (
    <CartContextProvider>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
