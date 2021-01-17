import { combineReducers } from "redux";
import storeReducer from "../redux/store/store.reducers";

export default combineReducers({
  store: storeReducer,
});
