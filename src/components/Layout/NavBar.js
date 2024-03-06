import React, { Fragment, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Badge, Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

function Header() {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const totalQuantity = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const openCartHandler = () => {
    setOpen(true);
  };

  const closeCartHandler = () => {
    setOpen(false);
  };

  const loginHandler = () => {
    navigate("/auth");
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/auth");
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
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "mx-2 text-dark"
                    : "mx-2 text-dark text-decoration-none";
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => {
                  return isActive
                    ? "mx-2 text-dark"
                    : "mx-2 text-dark text-decoration-none";
                }}
              >
                Products
              </NavLink>
              <NavLink
                to="/tours"
                className={({ isActive }) => {
                  return isActive
                    ? "mx-2 text-dark"
                    : "mx-2 text-dark text-decoration-none";
                }}
              >
                Tours
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive
                    ? "mx-2 text-dark"
                    : "mx-2 text-dark text-decoration-none";
                }}
              >
                Contact
              </NavLink>
            </Nav>
            <Button
              variant="dark"
              onClick={openCartHandler}
              className="d-flex align-items-center me-3"
            >
              <FaShoppingCart />
              <span className="mx-2">Cart</span>
              <Badge pill bg="warning" className="text-bg-warning">
                {totalQuantity}
              </Badge>
            </Button>
            <Button
              variant={authCtx.isLoggedIn ? "danger" : "primary"}
              onClick={authCtx.isLoggedIn ? logoutHandler : loginHandler}
            >
              {authCtx.isLoggedIn ? "Logout" : "Login"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
