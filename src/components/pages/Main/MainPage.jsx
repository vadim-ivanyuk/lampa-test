import React from "react";
import { ProductsList } from "./Products/ProductsList.jsx";

export function MainPage() {
  return (
    <div className="container d-flex justify-content-between flex-wrap mt-4">
      <ProductsList />
    </div>
  );
}
