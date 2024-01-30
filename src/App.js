import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Products from "./components/Products/Products";
import CartContextProvider from "./store/CartContextProvider";
import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <About /> },
      { path: "/products", element: <Products /> },
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
