import { createAction } from "redux-actions";
import * as types from "./store.types";
import { FIREBASE_DB } from "../../utils/apies";

export const getProducts = () => (dispatch) => {
  FIREBASE_DB.ref("products").on("value", (elem) => {
    dispatch({
      type: types.UPDATE_PRODUCTS,
      payload: elem.val(),
    });
  });
};

export const updateProducts = createAction(
  types.UPDATE_PRODUCTS,
  (products) => products
);

export const updateCart = createAction(types.UPDATE_CART, (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
});
