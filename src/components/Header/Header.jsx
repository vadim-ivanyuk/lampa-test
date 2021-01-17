import React from "react";
import { Cart } from "./Cart.jsx";

export const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex justify-content-end">
        <Cart />
      </div>
    </div>
  );
};
