import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "./ProductItem.jsx";
import { updateCart } from "../../../../redux/store/store.actions";

export const ProductsList = () => {
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    const cart = store.cart;
    cart.push(product);

    dispatch(updateCart(cart));
  };

  return (
    <>
      {store.products.map((product) => {
        return (
          <ProductItem
            product={product}
            key={product.id}
            addToCart={addToCart}
          />
        );
      })}
    </>
  );
};
