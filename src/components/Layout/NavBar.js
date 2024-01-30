import React, { Fragment, useState } from "react";
import { Button, Badge, Container, Nav, Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";

function Header() {
  const [open, setOpen] = useState(false);

  const openCartHandler = () => {
    setOpen(true);
  };

  const closeCartHandler = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Cart open={open} onCloseCart={closeCartHandler} />
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Pink Floyd</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#about">Tours</Nav.Link>
            </Nav>
            <Button variant="dark" onClick={openCartHandler}>
              Cart
              <Badge pill bg="warning" className="ms-2 text-bg-warning">
                0
              </Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
