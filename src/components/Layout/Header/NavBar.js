import { Button, Badge, Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Pink Floyd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Button variant="dark">
            Cart
            <Badge pill bg="warning" className="ms-2 text-bg-warning">
              0
            </Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
