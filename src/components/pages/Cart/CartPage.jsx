import React from "react";
import { ProductsList } from "./Products/ProductsList.jsx";
import OrderForm from "./OrderForm/OrderForm.jsx";

export const CartPage = () => {
  return (
    <div className="container d-flex mt-4 mb-4">
      <div className="col-9 cart-products">
        <ProductsList />
      </div>
      <div className="col-3">
        <OrderForm />
      </div>
    </div>
  );
};
