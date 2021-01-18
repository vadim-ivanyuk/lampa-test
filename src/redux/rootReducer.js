import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import storeReducer from "../redux/store/store.reducers";

const reducers = {
  store: storeReducer,
  form: formReducer,
};

export default combineReducers(reducers);
