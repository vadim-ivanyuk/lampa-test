import React from "react";
import { STORAGE_URL, STORAGE_TOKEN } from "../../../../utils/apies";

export const ProductItem = (props) => {
  const { product, addToCart } = props;

  return (
    <div className={`product-item ${product.id} mb-4`}>
      <img
        className="product-item__image"
        src={`${STORAGE_URL}${product.image}?alt=media&token=${STORAGE_TOKEN}`}
        alt=""
      />
      <h5 className="product-item__title mt-3 font-weight-bold">
        {product.title}
      </h5>
      <p className="product-item__description">{product.description}</p>
      <p className="product-item__price font-weight-bold">
        Price: {product.price} $
      </p>
      <button className="btn btn-dark col-12" onClick={addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};
