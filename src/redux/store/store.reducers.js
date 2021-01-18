import { handleActions } from "redux-actions";

const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const storeReducer = handleActions(
  {
    UPDATE_PRODUCTS: (state, { payload }) => {
      return { ...state, products: payload };
    },
    UPDATE_CART: (state, { payload }) => {
      return { ...state, cart: payload };
    },
  },
  initialState
);

export default storeReducer;
