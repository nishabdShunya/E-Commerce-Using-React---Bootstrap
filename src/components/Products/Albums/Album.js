import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Album = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.imageSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Button variant="info">ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
};

export default Album;
