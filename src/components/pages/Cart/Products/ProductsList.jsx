import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "./ProductItem.jsx";
import { updateCart } from "../../../../redux/store/store.actions";

export const ProductsList = () => {
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const { cart } = store;

  const selectedProduct = (id) => cart.findIndex((elem) => elem.id === id);

  const decrementQuantity = (id) => () => {
    const productIndex = selectedProduct(id);

    cart[productIndex].quantity > 1
      ? (cart[productIndex].quantity = cart[productIndex].quantity - 1)
      : cart.splice(productIndex, 1);

    dispatch(updateCart(cart));
  };

  const incrementQuantity = (id) => () => {
    const productIndex = selectedProduct(id);

    cart[productIndex].quantity = cart[productIndex].quantity + 1;

    dispatch(updateCart(cart));
  };

  return (
    <>
      {cart.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
      ))}
    </>
  );
};
