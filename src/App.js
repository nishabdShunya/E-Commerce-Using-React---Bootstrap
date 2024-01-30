import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Products from "./components/Products/Products";
import CartContextProvider from "./store/CartContextProvider";
import About from "./components/About/About";
import Tours from "./components/Tours/Tours";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/tours", element: <Tours /> },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
