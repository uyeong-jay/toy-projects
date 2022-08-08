import React from "react";

const Product = ({ product }) => {
  return (
    <>
      <h4>
        {product.id} - {product.title} - {product.price}
      </h4>
      <ul>
        <li>{product.id}</li>
        <li>{product.title}</li>
        <li>{product.price}</li>
      </ul>
    </>
  );
};

export default Product;
