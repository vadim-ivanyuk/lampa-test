import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Cart = () => {
  const store = useSelector((state) => state.store);

  const getTotalPrice = () => {
    if (store.cart.length > 0) {
      return store.cart
        .map((product) => {
          return Number(product.price);
        })
        .reduce((sum, current) => {
          return sum + current;
        });
    }
  };

  const { cart } = store;
  return (
    <>
      <div className="d-flex align-items-center mr-2">
        {cart.length > 0 && (
          <p className="d-flex align-items-center mb-0">{getTotalPrice()} $</p>
        )}
      </div>
      <div>
        {/* <Link to="/cart/">
          <button className="btn btn-light text-uppercase">Cart</button>
        </Link> */}
        <button className="btn btn-light text-uppercase">Cart</button>
      </div>
    </>
  );
};
