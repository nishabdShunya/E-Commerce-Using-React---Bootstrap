import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  
  return <div>{params.productId}</div>;
};

export default ProductDetails;
