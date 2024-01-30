import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Badge } from "react-bootstrap";

const CartItem = (props) => {
  return (
    <Row className="d-flex justify-content-between align-items-end my-4 py-4 bg-warning bg-opacity-10 border border-warning rounded">
      <Col className="d-flex align-items-end">
        <img
          src={props.imageSrc}
          alt="cart_item"
          height="75"
          className="rounded"
        />
        <h4 className="m-0 mx-1">{props.title}</h4>
        <Badge pill bg="warning" text="dark" className="fs-6 fw-semibold mx-1">
          ${props.price}
        </Badge>
        <Badge pill bg="dark" text="warning" className="fs-6 fw-semibold mx-1">
          x {props.quantity}
        </Badge>
      </Col>
      <Col className="text-end">
        <Button variant="outline-danger">Remove</Button>
      </Col>
    </Row>
  );
};

export default CartItem;
