import React from "react";
import { STORAGE_URL, STORAGE_TOKEN } from "../../../../utils/apies";

export const ProductItem = (props) => {
  const { product, decrementQuantity, incrementQuantity } = props;

  return (
    <div
      className={`d-flex col-12 product-item ${product.id} mb-4`}
      style={{ width: "100%" }}
    >
      <div className="mr-3">
        <img
          className="product-item__image"
          src={`${STORAGE_URL}${product.image}?alt=media&token=${STORAGE_TOKEN}`}
          alt=""
        />
      </div>
      <div>
        <h5 className="product-item__title font-weight-bold">
          {product.title}
        </h5>
        <p
          className="product-item__description mb-2"
        >
          {product.description}
        </p>
        <p className="product-item__price font-weight-bold m-0">
          Price: {product.price} $
        </p>
      </div>
      <div className="d-flex align-items-center ml-3">
        <button
          className="btn btn-dark font-weight-bold"
          onClick={decrementQuantity(product.id)}
        >
          -
        </button>
        <p className="m-0 font-weight-bold pl-3 pr-3">{product.quantity}</p>
        <button
          className="btn btn-dark font-weight-bold"
          onClick={incrementQuantity(product.id)}
        >
          +
        </button>
      </div>
    </div>
  );
};
