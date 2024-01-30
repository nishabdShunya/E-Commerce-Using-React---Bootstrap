import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Albums from "./components/Products/Albums";
import Merchandise from "./components/Products/Merchandise";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Albums />
      <Merchandise />
      <Footer />
    </Fragment>
  );
}

export default App;
