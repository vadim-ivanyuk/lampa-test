import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Cart = () => {
  const store = useSelector((state) => state.store);
  const { cart } = store;

  const getTotalPrice = () => {
    if (cart.length > 0)
      return cart
        .map((product) => Number(product.price) * product.quantity)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
  };

  return (
    <div className="d-flex cart">
      <div className="d-flex align-items-center mr-3">
        {cart.length > 0 && (
          <p className="d-flex align-items-center mb-0">
            {`Items ${cart.length}, subtotal $${getTotalPrice()}`}
          </p>
        )}
      </div>
      <div>
        <Link to="/cart/">
          <button className="btn btn-light text-uppercase">Cart</button>
        </Link>
      </div>
    </div>
  );
};
