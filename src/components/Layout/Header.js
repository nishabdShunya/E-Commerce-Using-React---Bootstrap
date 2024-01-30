import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import pinkFlyodCover from "../../assets/pf_cover.jpeg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Fragment>
      <NavBar />
      <Image src={pinkFlyodCover} fluid />
    </Fragment>
  );
};

export default Header;
