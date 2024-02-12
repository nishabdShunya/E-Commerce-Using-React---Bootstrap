import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../../store/cart-context";

const MerchItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({ ...props, quantity: 1 });
  };

  return (
    <Card>
      <Card.Img variant="top" src={props.imageSrc} />
      <Card.Body>
        <Card.Title>
          <Link
            to={`/products/${props.id}`}
            className="text-decoration-none text-dark"
          >
            {props.title}
          </Link>
        </Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Button variant="warning" onClick={addToCartHandler}>
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MerchItem;
