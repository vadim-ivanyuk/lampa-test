import { createAction } from "redux-actions";
import { FIREBASE_DB } from "../../utils/apies";

export const getProducts = () => (dispatch) => {
  FIREBASE_DB.ref("products").on("value", (elem) => {
    dispatch({
      type: "UPDATE_PRODUCTS",
      payload: elem.val(),
    });
  });
};

export const updateProducts = createAction(
  "UPDATE_PRODUCTS",
  (products) => products
);

export const updateCart = createAction("UPDATE_CART", (cart) => {
  return cart;
});
