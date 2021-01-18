import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "./ProductItem.jsx";
import { updateCart } from "../../../../redux/store/store.actions";

export const ProductsList = () => {
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const { cart } = store;

  const isCart = (id) => cart.findIndex((elem) => elem.id === id) !== -1;

  const addToCart = (product) => () => {
    const selectedProduct = cart.findIndex((elem) => elem.id === product.id);

    isCart(product.id)
      ? (cart[selectedProduct].quantity = cart[selectedProduct].quantity + 1)
      : cart.push({ ...product, quantity: 1 });

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
