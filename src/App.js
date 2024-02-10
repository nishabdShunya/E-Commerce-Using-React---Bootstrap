import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Products from "./components/Products/Products";
import CartContextProvider from "./store/CartContextProvider";
import About from "./components/About/About";
import Tours from "./components/Tours/Tours";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </CartContextProvider>
  );
}

export default App;
