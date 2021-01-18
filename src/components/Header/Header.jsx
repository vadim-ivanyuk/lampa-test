import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart.jsx";

export const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex justify-content-between">
        <h4 className="d-flex align-items-center m-0">
          <Link to="/">Lampa test</Link>
        </h4>
        <Cart />
      </div>
    </div>
  );
};
