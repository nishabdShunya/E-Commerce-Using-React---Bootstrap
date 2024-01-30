import React from "react";
import Header from "./components/Layout/Header";
import Albums from "./components/Products/Albums";
import Merchandise from "./components/Products/Merchandise";
import Footer from "./components/Layout/Footer";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Albums />
      <Merchandise />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
